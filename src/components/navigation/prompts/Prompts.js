import React from 'react';

import Join from '../../../components/join/Join';
import Login from '../../../components/login/Login';
import Popup from '../../../components/popup/Popup';

class Prompts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popup: {
                show: false,
                title: "",
                text: ""
            },
            showButton: true
        };
        this.openJoin = this.openJoin.bind(this);
        this.closeJoin = this.closeJoin.bind(this);

        this.openLogin = this.openLogin.bind(this);
        this.closeLogin = this.closeLogin.bind(this);

        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.hideButton = this.hideButton.bind(this);
    }

    openJoin() {
        this.setState({showJoin: true});
    }

    hideButton() {
        this.setState({showButton: false});
    }

    closeJoin() {
        this.setState({showJoin: false});
    }

    openLogin() {
        this.setState({showLogin: true});
    }

    closeLogin() {
        this.setState({showLogin: false});
    }

    openPopup(title, text) {
        this.setState({
            popup: {
                show: true,
                title: title,
                text: text
                }
            }
        );
    }

    closePopup() {
        this.setState({
            popup: {
                show: false,
                title: "",
                text: ""
                }
            }
        );
    }

    render() {
        if (this.props.status.logged_in) {
            return null;
        }
        return (
            <div className="prompts">{console.log(this.state.showButton)}
                <center><a style={{display: this.state.logged_in ? 'none' : 'block'}} onClick={this.openJoin} className="prompt-button">רישום לאתר</a><br />
                <a style={{display: this.state.logged_in ? 'none' : 'block'}} onClick={this.openLogin} className="prompt-button">התחברות מנהל</a></center>
                <Join open={this.state.showJoin} close={this.closeJoin} openPopup={this.openPopup} />
                <Login open={this.state.showLogin} close={this.closeLogin} openPopup={this.openPopup} setLogin={this.props.setLogin} />
                <Popup state={this.state.popup} close={this.closePopup} />
            </div>
        );
    }
}

export default Prompts;
