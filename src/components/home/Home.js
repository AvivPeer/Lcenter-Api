import React from 'react';

import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';



//import Facebook from '../social/facebook/Facebook';
// import Twitter from '../social/twitter/Twitter';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: [],
            startDate: new Date()
        };
      
    }
	    alertChange(event) {
        this.setState({alert: event.target.value});
    }
    componentDidMount() {
        Utility.setTitle("Home");
    }

    getSubtitle() {
        return "שיעורים פרטיים במתמטיקה לכלל שכבות הגיל";
    }

	
	
    render() {
        return (

            <div className="right">


                <Banner title={"מערכת אישית"} />
                <main className="home" align="center">
         






						
                    <div className="center">

<div className="row-container">

  <iframe id="luz" src="https://sqlteachers.000webhostapp.com/fullcalendar-master2/index.html" height="1000" className="second-row"></iframe>
</div>

						
                    </div>
					

                </main>
            </div>
        );
    }
}

export default Home;
