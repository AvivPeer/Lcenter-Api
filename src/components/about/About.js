import React from 'react';

import Utility from '../../Utility';


import Banner from '../navigation/banner/Banner';

class About extends React.Component {

    componentDidMount() {
        Utility.setTitle("About");
    }

    getSubtitle() {
        return "?מי אני";
    }

    render() {
        return (
            <div>
                <Banner title="על עצמי" subtitle={this.getSubtitle()} />
                <main className="about">
                    <section className="about-box" align="right">
					
					
</section>

                </main>
            </div>
        );
    }
}

export default About;
