import React, { Component, Fragment } from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink, LinkContainer } from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom';
import logo from '../assets/logo1.png';
//import Logout from './Logout';
import './Header.css';
//import Admin from './Admin';
//import Home from './Home';
//import Login from './Login';
//import Signup from './Signup';


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            Login_success: this.props.clicked,
            display:false
        }

    }
    componentDidMount(){
        console.log("componentDidMount",this.state.Login_success)
    }
    logoutHandler = () => {
        localStorage.removeItem("tokan");
       
    }
    render(){
        return(
           <React.Fragment>
               <Navbar dark expand="md" title="Ristorante">
                   <div className="container">
                        <NavbarBrand className="mr-auto" href="/">   
                             <img src={logo} height="70" width="75" alt="Ristorante"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        <div className="font">
                                        <h2><b>Risto</b></h2>
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <div className="font">
                                        <span className="fa fa-home fa-lg"></span> Home
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/About">
                                        <div className="font">
                                        <span className="fa fa-info-circle fa-lg"></span> About
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <div className="font">
                                        <span className="fa fa-bars fa-lg"></span> Menu
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Contact">
                                        <div className="font">
                                        <span className="fa fa-address-book fa-lg"></span> Contact Us
                                        </div>
                                    </NavLink>
                                </NavItem>
                                {this.props
                                ?
                                (
                                <Fragment>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/Logout">
                                            <div className="font right">
                                <span className="fa fa-sign-out fa-lg"></span> <button className="btnClass transparent" onClick={this.logoutHandler}>{this.state.display ? "Logout" : "Login"}</button>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </Fragment>
                                )
                                :
                                (
                                <Fragment>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/login">
                                            <div className="font right">
                                                <span className="fa fa-sign-in fa-lg"></span> <button className="btnClass transparent"> Login </button>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/Signup">
                                            <div className="font right">
                                                <span className="fa fa-sign-in fa-lg"></span> <button className="btnClass transparent"> Sign Up </button>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </Fragment>
                                )
                                }
                                
                            </Nav>
                        </Collapse>
                   </div>
               </Navbar><br/>
               <Jumbotron>
                     <div className="container">
                         <div className="row row-header">
                             <div className="col-12 col-sm-6">
                                 <h1>Ristorante</h1>
                                 <p> We take inspiration from the world's best cuisines, and create a unique fusion exprience. Our lipsmacking creations will tickle your culinary senses!</p>
                             </div>
                         </div>
                     </div>
               </Jumbotron>
           </React.Fragment>
        );
    }
}

export default Header;