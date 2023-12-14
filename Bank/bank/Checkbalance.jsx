import React, { Component } from 'react';
class Checkbalance extends Component {
    state = {  } 
    backbutton=()=>{
        this.props.gotouseroperations(this.props.ud);
    }
    render() { 
        return (
            <>
            <button onClick={this.backbutton}>back</button>
            <button onClick={this.props.gotohome}>Logout</button>
            <h1>checkbalance</h1>
            <h4>your balance is:{this.props.ud["balance"]}</h4>
            </>
        );
    }
}
 
export default Checkbalance;