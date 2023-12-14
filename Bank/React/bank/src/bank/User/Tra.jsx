import { useState } from "react";
import Nav from "./Nav";
import axios from "axios";

const Tra = () => {
  // const [receiver,setreceiver]=useState();
  // const[amount,setamount]=useState();
  const[tra,settra]=useState({
    receiver:"",
    amount:""
  });
  return (
    <>
      <Nav />
      <h1>Transfer</h1>
      <input type="text" placeholder="enter receiver" value={tra.receiver} onChange={(e)=>{settra({...tra,receiver:e.target.value})}}/>
      <input type="text" placeholder="enter amount" value={tra.amount} onChange={(e)=>{settra({...tra,amount:e.target.value})}}/>
      <input type="submit" onClick={()=>{
        let data = {
          sender:window.localStorage.getItem("id"),
          receiver:tra.receiver,
          debit:tra.amount
        }
          console.log(data);
          axios.post("http://localhost:8080/transfer",data).then((res)=>{
            alert("success");
            settra({
              receiver:"",
              amount:""
            });
          }).catch((error)=>{
              console.log(error.message)
          })
      }}/>
      
    </>
  );
};

export default Tra;
