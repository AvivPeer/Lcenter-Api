import React from 'react';
import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';

import Axios from 'axios';

import Modal from '../modal/Modal';
class AdminPanel extends React.Component {

    componentDidMount() {
        Utility.setTitle("Admin Panel");
    }

	lockLuz(){
		
		        Axios.get('lockLuz').then(response => {
            console.log(response.data);

            if (response.data.success) {
                this.setState(response.data);
                this.refs.modal.show("המערכת ננעלה בהצלחה");
                console.log("Successfully updated settings.");
            } else {
                this.refs.modal.show("Server Error", response.data.error);
                console.log("Error: " + response.data.error);
            }
        });
    }
		
	
    getAdminOptions() {
        return (
            <div>
             
                
            </div>
        );
    }

    getBody() {
        if (this.props.status.logged_in) {
            return (
                <div>
<div className="row-container">

  <iframe id="studluz" src="https://sqlteachers.000webhostapp.com/fullcalendar-master2/index2.html" height="1000" className="second-row"></iframe>
  <button className="update-button" onClick={() =>this.lockLuz()}>נעל את המערכת</button>
</div>
                   
	
				
                </div>
            );
        } else {
            return <div>Please log in to access the admin panel.</div>;
        }
    }

    render() {
		
        return (
		
            <div>
			<Modal ref="modal" />
                <Banner title="Admin Panel" subtitle="The place to manage your website."/>
                <main className="admin-panel">
				
                    {this.getBody()}
					
                </main>
            </div>
        );
    }
	

}

export default AdminPanel;