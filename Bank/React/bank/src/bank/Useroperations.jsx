import React, { Component } from 'react';
class Useroperations extends Component {
    state = {  } 
    checkbalance=()=>{
       this.props.gotocheckbalance(this.props.ud);
     //console.log("success");  
    }
    withdraw=()=>{
        this.props.gotowithdraw(this.props.ud);
    }
    deposit=()=>{
        this.props.gotodeposit(this.props.ud);
    }
    transfer=()=>{
        this.props.gototransfer(this.props.ud);
    }
    render() { 
        return (
            <>
            <h1>welcome to user operations {this.props.ud["username"]}</h1>
            <button type="submit" className="btn btn-primary" onClick={this.checkbalance}>checkbalance</button>
            <button onClick={this.withdraw}>Withdraw</button>
            <button onClick={this.deposit}>Deposit</button>
            <button onClick={this.transfer}>transfer</button>
            <button onClick={this.props.gotohome}>Logout</button>
            </>
        );
    }
}
 
export default Useroperations;