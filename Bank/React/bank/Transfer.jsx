import React, { Component } from 'react';
import { finduser,changebalance,addbalance } from './User';
class Transfer extends Component {
    state = {  } 
    backbutton=()=>{
        this.props.gotouseroperations(this.props.ud);
    }
    checkbalancebutton=()=>{
        this.props.gotocheckbalance(this.props.ud);
    }
    validate=()=>{
        var a=document.getElementById("receiverid").value;
        var b=document.getElementById("amount").value;
        const usermatch=finduser(Number(a));
        if(usermatch!=="")
        {
            //console.log("userfound")
            var c=this.props.ud["balance"];
            if(b<=c)
            {
                changebalance(this.props.ud,Number(b));
                addbalance(usermatch,Number(b));
                document.getElementById("receiverid").value="";
                document.getElementById("amount").value="";
                alert("success")
            }
            else{
                document.getElementById("amount").value="";
                alert("insufficient balance")
            }
        }
        else{
            //console.log("usernotfound",usermatch);
            alert("receiver not found")
        }
         

    }
    render() { 
        return (
            <>
            <button onClick={this.backbutton}>back</button>
            <button onClick={this.checkbalancebutton} >checkbalance</button>
            <div className="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" id="receiverid" placeholder="Enter receiverid"  />
                    <label htmlFor="receiverid">receiverid</label>
                </div>
                <div className="form-floating mt-3 mb-3">
                    <input type="text" class="form-control" id="amount" placeholder="Enter amount"  />
                    <label htmlFor="amount">amount</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.validate}>Submit</button>
            </>
        );
    }
}
 
export default Transfer;