import React from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import Modal from '../../modal/Modal';

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.alertChange = this.alertChange.bind(this);

        this.state = {
            alert: ""
        };
    }

    componentDidMount() {
        Axios.get('/api/settings').then(response => {
            console.log(response.data);
            this.setState(response.data.data);
        });
    }

    alertChange(event) {
        this.setState({alert: event.target.value});
    }
     visitPage(){
        window.location='http://localhost:3000/rankings';
    }
	
    update() {
        console.log("Updating settings");
        console.log(this.state);

        Axios.get('avivfunc', this.state).then(response => {
            console.log(response.data);

            if (response.data.success) {
                this.setState(response.data);
                this.refs.modal.show("Success!", "You have successfully updated the setttings.");
                console.log("Successfully updated settings.");
            } else {
                this.refs.modal.show("Server Error", response.data.error);
                console.log("Error: " + response.data.error);
            }
        });
    }

    render() {
        return (
            <div className="settings" align="right">
                <Modal ref="modal" />
                <h2>Settings</h2>

                <div className="settings-alert">
                    <span align="right">:מחק בקשות</span>
                   
                </div>
                <button onClick={this.update} className="update-button">מחק</button>
<NavLink active className="update-button" to={{pathname: '/rankings'}}>בקשות/אילוצים</NavLink>
				
               
            </div>
        );
    }
}

export default Settings;
