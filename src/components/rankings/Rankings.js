import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';
import Rankingslist from '../../components/rankings/rankingslist/Rankingslist';

class Rankings extends React.Component {



    render() {
        var params = this.props.match.params;
        var subtitle = "רשימת בקשות";
        return (
            <div>
                <Banner title="בקשות/אילוצים לשיעור פרטי" subtitle={subtitle}  />
                <main className="rankings" align="right">
                    <Rankingslist params={params} pagination={true} category={false} />

                </main>
            </div>
        );
    }
}

export default Rankings;
