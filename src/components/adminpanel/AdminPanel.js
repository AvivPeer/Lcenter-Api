import React from 'react';
import Utility from '../../Utility';
import { NavLink } from 'react-router-dom';
import Settings from '../adminpanel/settings/Settings';
import PostManager from '../adminpanel/postmanager/PostManager';
import Banner from '../navigation/banner/Banner';

class AdminPanel extends React.Component {

    componentDidMount() {
        Utility.setTitle("Admin Panel");
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

  <iframe src="https://sqlteachers.000webhostapp.com/fullcalendar-master2/index2.html" height="1000" className="second-row"></iframe>
</div>
                    {this.getAdminOptions()}
	

                </div>
            );
        } else {
            return <div>Please log in to access the admin panel.</div>;
        }
    }

    render() {
		
        return (
		
            <div>
			
                <Banner title="Admin Panel" subtitle="The place to manage your website."/>
                <main className="admin-panel">
				
                    {this.getBody()}
					
                </main>
            </div>
        );
    }
	

}

export default AdminPanel;