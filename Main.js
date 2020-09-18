import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Admin from './Admin';
import Logout from './Logout';
import { Switch, Route } from 'react-router-dom';


class Main extends Component{
    constructor(props){
        super(props);
        const token = localStorage.getItem("token");
        let LoggedIn = true;
        if(token == null)
        {
            LoggedIn = false
        }
        this.state = {
            LoggedIn
        }
        //this.switchAuthHandler = this.switchAuthHandler.bind(this);
        //console.log(this.state.LoggedIn);
    }
    //switchAuthHandler = () => {
    //       return( this.setState({LoggedIn: false}));
    //}
    render(){
            const LoginPage = () => {
                return(
                    <Login />
                );
            }
        return(
            <div>
                    
                     <Header clicked={this.state.LoggedIn}/> 

                    <Switch>
                        <Route exact path="/" component={LoginPage} />
                        <Route exact path="/Login" component={Login} />
                        {this.state.LoggedIn ?  <Route exact path="/Home" component={Home} /> : null}
                       
                        <Route exact path="/Signup" component={Signup} />
                        <Route exact path="/Admin" component={Admin} />
                        <Route exact path="/Logout" component={Logout} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Contact" component={Contact} />
                    </Switch>  
                    <Footer />         
            </div>
        );
    }
}
export default Main;

/*  {this.state.is_sign_up ? <Signup handleSignUpClick={this.handleSignUpClick}/> : <Login handleSignUpClick={this.handleSignUpClick} />} 

<div>
{this.state.is_login === "login" ? <Login /> : <Signup handleLoginClick={this.handleLoginClick} />}
</div>*/