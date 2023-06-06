import React from 'react';
import Jobs from '../../../Jobs';

class Player extends React.Component {


    render() {


        return (
            <section className="player">

                <h2>{this.props.player.name} :שם</h2>
                <h3>{this.props.player.email} :אימייל </h3>
				 <h3>מספר טלפון: {this.props.player.phone} </h3>
                <h3>{this.props.player.request} :בקשה</h3>

               
            </section>
        );
    }
}

export default Player;
