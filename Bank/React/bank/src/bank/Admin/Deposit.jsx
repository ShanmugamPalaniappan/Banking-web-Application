import {  useState } from "react";
import Adminnav from "./Adminnav";
import axios from "axios";

const Deposit = () => {
    // const[id,setid]=useState();
    // const[amount,setamount]=useState();
    const[deposit,setdeposit]=useState({
        id:"",
        amount:""
    });
    return ( <>
    <Adminnav/>
    <input type="text" placeholder="enter id" value={deposit.id} onChange={(e)=>{
        setdeposit({...deposit,id:e.target.value})
    }}/>
    <input type="text" placeholder="enter amount" value={deposit.amount} onChange={(e)=>{
        setdeposit({...deposit,amount:e.target.value})
    }}/>
    <input type="submit" onClick={()=>{
        axios.post("http://localhost:8080/admindeposit",{
            userId:deposit.id,
            balance:deposit.amount
        }).then((res)=>{
            alert("success");
            setdeposit({
                id:"",
                amount:""
            });
            //console.log(deposit);
        }).catch((error)=>{
            console.log(error);
        })
    }}/>
    </> );
}
 
export default Deposit;