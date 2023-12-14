import React, { Component } from 'react';
import{addbalance} from './User';
class Deposit extends Component {
    state = {  } 
    backbutton=()=>{
        this.props.gotouseroperations(this.props.ud);
    }
    checkbalancebutton=()=>{
        this.props.gotocheckbalance(this.props.ud);
    }
    depositprocess=()=>{
        var a=document.getElementById("depositamount").value;
        //var ud=this.props.ud["balance"];
        addbalance(this.props.ud,Number(a));
        document.getElementById("depositamount").value="";
        alert("success")
    }
    render() { 
        return (
            <>
            <button onClick={this.backbutton}>back</button>
            <button onClick={this.checkbalancebutton} >checkbalance</button>
            
            <div className="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" id="depositamount" placeholder="Enter depositamount"  />
                    <label htmlFor="depositamount">depositamount</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.depositprocess} >Submit</button>

            </>
        );
    }
}
 
export default Deposit;