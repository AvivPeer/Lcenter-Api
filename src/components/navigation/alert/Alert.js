import React from 'react';


class Alert extends React.Component {

    constructor(props) {
        super(props);

        this.close = this.close.bind(this);

        this.state = {
            show: true
        };
    }

    componentDidMount() {

    }

    close() {
        this.setState({show: false});
    }

    render() {
        if (!this.state.alert || this.state.alert.length < 1 || !this.state.show) {
            return null;
        }
        return (
            <div className="alert">
                <span className="icon"></span>
                {this.state.alert}
                <span onClick={this.close} className="close">&#10006;</span>
            </div>
        );
    }
}

export default Alert;
