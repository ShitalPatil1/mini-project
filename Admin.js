import React, { Component } from 'react';
import './Login.css';
import { Link,Redirect  } from 'react-router-dom';

class Admin extends Component{
    constructor(props){
        super(props);
        const token = localStorage.getItem("token");
        let LoggedIn = true;
        if(token === null)
        {
            LoggedIn = false
        }
        this.state = {
            LoggedIn
        }

    }
    render(){
            if(this.state.LoggedIn === false)
            {
                return <Redirect to="/Login" />
            }
            
        return(
            <Link to="/Logout"><button className="btnClass">Logout</button></Link>
        );

    }
    

}

export default Admin;