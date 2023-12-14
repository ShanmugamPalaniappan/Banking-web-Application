import { useState } from "react";
import Adminnav from "./Adminnav";
import axios from "axios";

const Transfer = () => {
    // const[sender,setsender]=useState();
    // const[receiver,setreceiver]=useState();
    // const[amount,setamount]=useState();
    const[transfer,settransfer]=useState({
      sender:"",
      receiver:"",
      amount:""
    });
    return (  <>
    <Adminnav/>
        <input type="text" placeholder="enter sender" value={transfer.sender} onChange={(e)=>{settransfer({...transfer,sender:e.target.value})}} />
        <input type="text" placeholder="enter receiver" value={transfer.receiver} onChange={(e)=>{settransfer({...transfer,receiver:e.target.value})}} />
        <input type="text" placeholder="enter amount" value={transfer.amount} onChange={(e)=>{settransfer({...transfer,amount:e.target.value})}} />
        <input type="submit" onClick={()=>{
          axios.post("http://localhost:8080/admintransfer",{
            sender:transfer.sender,
            receiver:transfer.receiver,
            debit:transfer.amount
          }).then((res)=>{
            alert(res.data);
            settransfer({
              sender:"",
              receiver:"",
              amount:""
            });
          }).catch((error)=>{
            console.log(error);
          })  
        }}/>
    </>);
}
 
export default Transfer;