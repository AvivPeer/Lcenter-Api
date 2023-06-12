import React from 'react';
import Axios from 'axios';
import Modal from '../../modal/Modal';
class Player extends React.Component {
	
	approveUser(username){
		
		    Axios.post('approveUser',username).then(response => {
            console.log(response.data);
			this.refs.modal.show("אושר בהצלחה");
            this.setState(response.data.data);
        });
		
	}
	
		declineUser(username){
		
		    Axios.post('declineUser',username).then(response => {
            console.log(response.data);
			this.refs.modal.show("נדחה בהצלחה");

            this.setState(response.data.data);
			
        });
		
	}
    render() {

        return (

			<section className="player">
<Modal ref="modal" />

				<h4>{this.props.player.username} :שם משתמש </h4>
                <h4>{this.props.player.name} :שם</h4>
                <h4>{this.props.player.email} :אימייל </h4>
				
				 <h4>מספר טלפון: {this.props.player.phone} </h4>
                <h4> מחכה לאישור</h4>
				
				<button onClick={() =>this.approveUser("username="+this.props.player.username)}>אשר בקשת הרשמה</button>
				<button onClick={() =>this.declineUser("username="+this.props.player.username)}>דחה בקשת הרשמה</button>
               
            </section>
			
        );
    }
}

export default Player;
