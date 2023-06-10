import React from 'react';

import Axios from 'axios';
import Utility from '../../../Utility';

import Player from '../../../components/rankings/player/Player';

import Pagination from '../../navigation/pagination/Pagination';
import Loading from '../../loading/Loading';

class Rankingslist extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            data: {
                data: [],
                error: [],
            },
            job: "",
            username: ""
        };
    }

    componentDidMount() {
        this.requestData(this.props.params);
    }

    componentWillReceiveProps(newProps) {
        if (!this.props.params || !newProps.params) {
            return;
        }
        if (this.props.params.param1 !== newProps.params.param1) {
          this.requestData(newProps.params);
        } else if (this.props.params.param2 !== newProps.params.param2) {
          this.requestData(newProps.params);
        } else if (this.props.params.param3 !== newProps.params.param3) {
          this.requestData(newProps.params);
        }
    }

    requestData(params) {
        Axios.get('rankings' + this.getResource(params)).then(response => {
            console.log(response.data);
            this.setState({data: response.data});
        });
        Utility.scrollToTop();
    }

    getResource(params) {

        if (!params) {
            return "";
        }

        console.log(params.param1, params.param2, params.param3);

        var resource = "";

        if (params.param1) {
            resource += "/" + params.param1;
        }

        if (params.param2) {
            resource += "/" + params.param2;
        }

        if (params.param3) {
            resource += "/" + params.param3;
        }

        return resource;
    }

    getPlayers() {
        if (this.state.data.success === false) {
            return (
                <div className="error">{this.state.data.error}</div>
            );
        }

        if (this.state.data.length === 0) {
            return <Loading />
        }

       
        var rank = 0;

        

        return this.state.data.data.map(function(player) {
            rank += 1;
            return (
			
                <Player player={player} rank={rank} key={player.name} />

            );
        });
    }

    isRankingsType(type) {
        if (!this.props.params) {
            return false;
        }
        if (!this.props.params.param1) {
            return false;
        }
        if (this.props.params.param1.toLowerCase() !== type) {
            return false;
        }
        return true;
    }



    shouldPaginate() {
        if (!this.props.pagination) {
            return false;
        }
        if (!this.state.data.success) {
            return false;
        }
        if (this.isRankingsType("search")) {
            return false;
        }
        return true;
    }
	approveUser(username){
		
		    Axios.post('approveUser',username).then(response => {
            console.log(response.data);
            this.setState(response.data.data);
        });
		
	}
    render() {



        if (this.shouldPaginate()) {
            var page_info = {
                prev: this.state.data.prev,
                current: this.state.data.current,
                next: this.state.data.next,
                last: this.state.data.last
            }
            var params = [this.props.params.param1, this.props.params.param2, this.props.params.param3];
            var pagination = <Pagination type="rankings" page_info={page_info} params={params} />
        }



        return (
		
            <section className="rankingslist">

				  
                  <div>{this.getPlayers() }

				  </div>

                  {pagination}
            </section>
        );
    }
}

export default Rankingslist;
