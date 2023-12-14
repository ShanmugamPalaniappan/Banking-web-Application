import { useState } from "react";
import Adminnav from "./Adminnav";
import axios from "axios";

const Withdraw = () => {
    // const[id,setid]=useState();
    // const[amount,setamount]=useState();
    const [withdraw,setwithdraw]=useState({
        id:"",
        amount:""
    });
    return (  <>
    <Adminnav/>
    <input type="text" placeholder="enter id" value={withdraw.id} onChange={(e)=>{setwithdraw({...withdraw,id:e.target.value})}}/>
    <input type="text" placeholder="enter amount" value={withdraw.amount} onChange={(e)=>{setwithdraw({...withdraw,amount:e.target.value})}}/>
    <input type="submit" onClick={()=>{
        axios
        .post("http://localhost:8080/adminwithdraw",
        {userId:withdraw.id,
        balance:withdraw.amount
        }).then((res)=>{
            alert(res.data)
            setwithdraw("");
        }).catch((error)=>{
            console.log(error);
        })
        }} />
    </>);
}
 
export default Withdraw;