import React, { Component } from 'react';
import  './Login.css';
import login from '../assets/login.svg';
import Signup from './Signup';
import { Redirect } from 'react-router-dom';
import Header from './Header';


class Login extends Component{
 constructor(props){
     super(props);
     const token = localStorage.getItem("token");
     let LoggedIn = true;
     if(token == null)
     {
         LoggedIn = false
     }
     this.state = {
         Username: '',
         Password: '',
         is_sign_up: false,
         LoggedIn
        
     };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
}

handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    });
}
handleClick()
{
    this.setState({
        is_sign_up:true
    });
}
handleSubmit = (event) => {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("current State is: " + JSON.stringify(this.state));
    event.preventDefault();
    const { username, password } = this.state;
    if(username === "Shital" && password === "123") 
    {
        localStorage.setItem("token","sdfghjklwertyuopvbnm");
        this.setState({
            LoggedIn: true
        });
    }
    
}
    render(){  
        if(this.state.LoggedIn)
        {
            return <Redirect to="/Admin"/>
        } 

        return(
            <div>
                <div className="containerClass">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form className="sign-in-form" onSubmit={this.handleSubmit}>
                                <h2 className="title">Sign in</h2>
                                <div className="input-field">
                                    <i className="fa fa-user"></i>
                                    <input 
                                        type="text" 
                                        placeholder="Username" 
                                        id="username"
                                        name="username"
                                        onChange={this.handleInputChange}
                                        /> 
                                </div>
                                <div className="input-field">
                                    <i className="fa fa-lock" ></i>
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        id="password"
                                        name="password"
                                        onChange={this.handleInputChange}
                                        />
                                </div>
                                <input 
                                    type="submit" 
                                    value="login" 
                                    className="btnClass solid"
                                    />

                                <p className="social-text">Or Sign in with social platforms</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                    <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fa fa-google"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </div>
                            </form>

                        </div>
                    </div>


                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                            <img src={login} className="image" alt=""/>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        );
    }

}

export default Login; 
/*
<div className="panel right-panel">
                            <div className="content">
                                <h3>One of us ?</h3>
                                <p>.......</p>
                                <button className="btn transparent">Sign in</button>
                            </div>
                            <img src={signup} className="image" alt=""/>
                        </div>
                        */


/*


                            <form className="sign-up-form">
                                <h2 className="title">Sign up</h2>
                                <div className="input-field">
                                    <i class="fa fa-user"></i>
                                    <input type="text" placeholder="Username"/> 
                                </div>
                                <div className="input-field">
                                    <i className="fa fa-envelope"></i>
                                    <input type="email" placeholder="Email"/> 
                                </div>
                                <div className="input-field">
                                    <i className="fa fa-lock" ></i>
                                    <input type="password" placeholder="Password"/>
                                </div>
                                <input type="sign up" value="Sign up" className="btn solid"/>

                                <p className="social-text">Or Sign up with social platforms</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                    <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fa fa-google"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </div>
                            </form>
*/