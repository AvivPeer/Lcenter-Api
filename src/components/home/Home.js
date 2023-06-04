import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';

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

    componentDidMount() {
        Utility.setTitle("Home");
    }

    getSubtitle() {
        return "שיעורים פרטיים במתמטיקה לכלל שכבות הגיל";
    }

    render() {
        return (
		
            <div className="right">
			

                <Banner title={"לומדים עם לוצ'י"} />
                <main className="home">
				

                    <div className="center">
	
				    <object id="myobject"
            width="950"
            height="800"
            align="center"
            data=
"https://sqlteachers.000webhostapp.com/fullcalendar-master2/index.html">
    </object>


						
                    </div>

                </main>
            </div>
        );
    }
}

export default Home;
