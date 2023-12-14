import React, { Component } from 'react';
import{userlogin} from './User';
class Userlogin extends Component {
    state = {}
    getuservalue=()=>{

        var a=document.getElementById("username").value;
        var b=document.getElementById("password").value;
         var c=userlogin(a,b);
        if(c!=="")
        {
            this.props.gotouseroperations(c);
        }
        else
        {
            document.getElementById("username").value="";
            document.getElementById("password").value="";
            alert("wrong username or password");
           // console.log("failure");

        }
    }
    render() {
        return (
            <>
                <button onClick={ this.props.gotohome}> home</button>
                <h1>
                    welcome to user page
                </h1>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" id="username" placeholder="Enter username"  />
                    <label htmlFor="username">username</label>
                </div>
                <div className="form-floating mt-3 mb-3">
                    <input type="password" class="form-control" id="password" placeholder="Enter password"  />
                    <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.getuservalue}>Submit</button>
            </>
        );
    }
}

export default Userlogin;