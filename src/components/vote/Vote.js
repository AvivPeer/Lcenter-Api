import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';
import Axios from 'axios';

import Banner from '../navigation/banner/Banner';

class Vote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details: []
        };
    }
    componentDidMount() {
        Utility.setTitle("Vote");
        console.log(this.props.status);
    }

    getSiteUrl(site) {
        if (!this.props.status.logged_in) {
            return site.url;
        } else {
            return site.url + site.getPingback(this.props.status.username);
        }
    }

    handleVote(i, sitename){
        console.log(i)
        this.props.status.voted = {gtop: 0, topg: 1, xtremetop: 2}[i];
        Axios.post('playerVoted/' + this.props.status.username + "/" + this.props.status.ip + "/" + this.props.status.voted).then((res) => {
            console.log(res);
            this.setState({details: [false, false, false, false]})
        }).catch(err => console.log(err))
    }

    getVoteSites() {
        if (!this.props.status.logged_in) {
            return null;
        }
        Axios.get("https://jsonip.com").then((res) => {
            this.props.status.ip = res.data.ip.replace(/./g, "_");
        if(this.state.details.length>=4 || this.state.details.length === 0 ){
            Axios.get('vote/' + this.props.status.username + "/" + this.props.status.ip).then((response) => {
            this.setState({details: response.data.data});
        })
    }
    })
    var voteSites = [];
    for (var i in Config.vote_sites) {
        var site = Config.vote_sites[i];
        let number = i;
        if(this.state.details[{gtop: 0, topg: 1, xtremetop: 2}[i]]){
            voteSites.push(
                <div key={site.name}>
                    <h1>{site.name}</h1>
                    <a href={this.getSiteUrl(site)} target="_blank" onClick={() => this.handleVote(number)}>
                        <div className="vote-link">
                            <img src="/images/vote2.png" alt="" />
                            <div className="description">
                                <h3>PLEASE REMEMBER TO LOG OFF BEFORE VOTING.</h3>
                                <h2>Click here to vote on {site.name}.</h2>
                                <h3>You can vote once every {site.hours} hours.</h3>
                            </div>
                        </div>
                    </a>
                </div>
            );
        }else{
            voteSites.push(
                <div key={site.name}>
                    <h1>{site.name}</h1>
                        <div className="vote-link">
                            <img src="/images/votebw.png" alt="" />
                            <div className="description">
                                <h2>You have voted on {site.name} within the last {site.hours} hours.</h2>
                                <h3>You can only vote once every {site.hours} hours.</h3>
                            </div>
                        </div>
                </div>
            );
        }
        
    }
    console.log(voteSites);
    return voteSites;
    }

    getInfo() {
        if (this.props.status.logged_in) {
            return "If the vote is successful, the rewards will be added to your account shortly. The vote count only updates when you log in again on the website.";
        } else {
            return "Please log in to your account to vote for us.";
        }
    }

    render() {
        return (
            <div>
                <Banner title="Vote" subtitle="Support us by voting!" />
                <main className="vote">
                    <h3 className="info">{this.getInfo()}</h3>
                    {this.getVoteSites()}
                </main>
            </div>
        );
    }
}

export default Vote;
