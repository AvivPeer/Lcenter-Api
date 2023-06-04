import React from 'react';
import { NavLink } from 'react-router-dom';
import Config from '../../../Config';

class Links extends React.Component {
    render() {
        return (
            <nav className="links">
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">בית</NavLink></li>
                    <li><NavLink activeClassName="active" to={{pathname: '/about'}}>על עצמי</NavLink></li>


                </ul>
            </nav>
        );
    }
}

export default Links;
