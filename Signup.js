import React, { Component} from 'react';
import  './Signup.css';
import signup from '../assets/signup.svg';
//import Login from '../LoginComponent/Login';



class Signup extends Component{
   constructor(props){
        super(props);
        this.state = {
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Form is submited');
    }
  }
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    } 

    this.setState({
      errors: errors
    });

    return isValid;
}

       render(){
           return(
            <div>
                <div className="containerClass">
                    <div className="forms-container">
                         <div className="signin-signup">
                                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                                    <h2 className="title">Sign up</h2>
                                    <div className="input-field">
                                        <i className="fa fa-user"></i>
                                        <input 
                                            type="text" 
                                            placeholder="Username"
                                            id="name"
                                            name="name"
                                            value={this.state.input.name}
                                            onChange={this.handleChange}
                                        required/> 
                                        <div>{this.state.errors.name}</div>
                                    </div>
                                    <div className="input-field">
                                        <i className="fa fa-envelope"></i>
                                        <input 
                                            type="email" 
                                            placeholder="Email"
                                            value={this.state.input.email}
                                            onChange={this.handleChange}
                                            id="email"
                                            name="email"    
                                            required/> 
                                        <div>{this.state.errors.email}</div>
                                    </div>
                                    <div className="input-field">
                                        <i className="fa fa-lock" ></i>
                                        <input 
                                            type="password" 
                                            placeholder="Password"
                                            value={this.state.input.password}
                                            onChange={this.handleChange}
                                            name="password"
                                            id="password"    
                                            required/>
                                        <div>{this.state.errors.password}</div>
                                    </div>
                                    <div className="input-field">
                                        <i className="fa fa-lock" ></i>
                                        <input 
                                            type="password" 
                                            placeholder="Confirm Password"
                                            name="confirm_password" 
                                            value={this.state.input.confirm_password}
                                            onChange={this.handleChange}
                                            id="confirm_password"
                                            required/>
                                        <div>{this.state.errors.confirm_password}</div>
                                    </div>
                                    <input 
                                      type="submit" 
                                      value="Sign up" 
                                      className="btnClass solid"
                                      onClick={this.props.handleSignUpClick}
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
                        <img src={signup} className="image" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 }
             
}
export default Signup;

/* <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>.......</p>
                            <button 
                                className="btn transparent"
                               // onClick={this.props.handleSignUpClick}
                                >Sign in</button>
                        </div>
                        <img src={signup} className="image" alt=""/>
                    </div>
                </div>
            </div>*/