import React, { Component } from 'react';
import { changebalance } from './User';
class Withdraw extends Component {
    state = {  } 
    backbutton=()=>{
        this.props.gotouseroperations(this.props.ud);
    }
    checkbalancebutton=()=>{
        this.props.gotocheckbalance(this.props.ud);
    }
    validate=()=>{
        var a=document.getElementById("withdrawamount").value;
        var b=this.props.ud["balance"];
        //console.log(typeof(a))
        if(a<=b)
        {
            //console.log(typeof(a))
            changebalance(this.props.ud,Number(a));
            //console.log("withdrawsuccess")
            document.getElementById("withdrawamount").value="";
            alert("success")
            //console.log(a,b)
        }
        else{
            //console.log("withdrawfailed")
            //console.log(a,b)
            document.getElementById("withdrawamount").value="";
            alert("insufficient balance")
        }
    }
    render() { 
        return (
            <>
            <button onClick={this.backbutton}>back</button>
            <button onClick={this.checkbalancebutton} >checkbalance</button>
            <div className="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" id="withdrawamount" placeholder="Enter withdrawamount"  />
                    <label htmlFor="withdrawamount">withdrawamount</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.validate}>Submit</button>
            </>
        );
    }
}
 
export default Withdraw;