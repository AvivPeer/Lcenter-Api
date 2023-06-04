import React from 'react';
import Config from '../../Config';
import { Link } from 'react-router-dom';
import AdSense from 'react-adsense';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="copyright">Copyright © {new Date().getFullYear()} Aviv Peer.</div>
                <div className="credits">Owned by Aviv Peer.</div>


            </footer>
        );
    }
}

export default Footer;
