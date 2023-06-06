import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';
import Axios from 'axios';
import Banner from '../navigation/banner/Banner';
import Status from '../home/status/Status';

import Newslist from '../news/newslist/Newslist';
import Rankingslist from '../rankings/rankingslist/Rankingslist';
import More from '../navigation/more/More';
import Promo from '../promo/Promo';

import Discord from '../social/discord/Discord';

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
    updateLuz(event) {
        event.preventDefault();
        var form = new FormData(this.refs.form);
        Axios.get("https://jsonip.com").then((res) => {
            form.set('ip', res.data.ip)
            Axios.post('updateLuz', form).then((response) => {
                console.log(response.data);
    
                if (response.data.success) {
                    console.log("Success");
                  
                 
                } else {
                    this.setState({error: response.data.error});
    
                    console.log(response.data.error);
                    console.log("Failure");
                }
            });
        })
    }
	
	
    render() {
        return (

            <div className="right">


                <Banner title={"מערכת אישית"} />
                <main className="home" align="center">
         






						
                    <div className="center">

				    <object id="myobject"
            width="950"
            height="800"
            align="center"
            data=
"https://sqlteachers.000webhostapp.com/fullcalendar-master2/index.html?var=דני">
    </object>


						
                    </div>
					

                </main>
            </div>
        );
    }
}

export default Home;
