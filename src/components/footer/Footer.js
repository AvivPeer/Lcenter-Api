import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="copyright">Copyright © {new Date().getFullYear()} Aviv Peer.</div>
                <div className="credits">Owned by Aviv Peer (Based on Aria Project).</div>


            </footer>
        );
    }
}

export default Footer;
