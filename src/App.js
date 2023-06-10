import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';
import Config from './Config';
import Rankings from './components/rankings/Rankings';
import About from './components/about/About';
import AdminPanel from './components/adminpanel/AdminPanel';
import Disclaimer from './components/disclaimer/Disclaimer';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Header from './components/navigation/header/Header';



import './stylesheets/App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        Axios.defaults.baseURL = Config.base_url;
        this.setLogin = this.setLogin.bind(this);
        this.state = {
            logged_in: false,
            username: "",
            gm_level: 0
        };
    }

    componentDidMount() {

    }

    setLogin(status) {
        console.log("Setting new login status");
        this.setState(status);

    }

    render() {



        var AdminPanelPage = (props) => {
			if(this.state.logged_in){
				
				            return (<div>  <AdminPanel status={this.state}/>
								<Route exact path="/adminpanel" component={Rankings}/>
                    <Route exact path="/adminpanel/:param1" component={Rankings}/>
                    <Route exact path="/adminpanel/:param1/:param2" component={Rankings}/>				
                    <Route exact path="/adminpanel/:param1/:param2/:param3" component={Rankings}/>
					
					
					</div>
					
					);
			}
			else{
				
				return (<AdminPanel status={this.state}/>)
			}


        }

        return (
            <Router>
                <div>
                    <Header status={this.state} setLogin={this.setLogin}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/disclaimer" component={Disclaimer}/>
                    <Route exact path="/adminpanel" component={AdminPanelPage}/>


                    <Footer/>
                </div>
            </Router>
        );
    };
}

export default App
