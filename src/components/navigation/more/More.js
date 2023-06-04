import React from 'react';
import { Link } from 'react-router-dom';

class More extends React.Component {

    render() {
        var type = this.props.type;
        var link = {
            pathname: type + "/1"
        };
        return (
            <div className="more">
                <Link to={link}>See more {type} »</Link>
            </div>
        );
    }
}

export default More;
