import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Changepassword = () => {
    const nav=useNavigate();
    const[data,setdata]=useState({
        newpassword:"",
        renewpassword:""
    });
    return (  <>
    <h1>change password</h1>
    <h1>{window.localStorage.getItem("id")}</h1>
    <input type="text" placeholder="enter new password" value={data.newpassword} onChange={(e)=>{
        setdata({...data,newpassword:e.target.value})
    }}/>  <br/>  
    <input type="text" placeholder="re-enter new password" value={data.renewpassword} onChange={(e)=>{
        setdata({...data,renewpassword:e.target.value})
    }}/> <br/>   
    <input type="submit" className="btn btn-success" onClick={()=>{
        console.log(data);
        console.log(window.localStorage.getItem("id"));
        if(data.newpassword===data.renewpassword){
            axios.post("http://localhost:8080/changepassword",{
                userId:window.localStorage.getItem("id"),
                password:data.newpassword
            }).then((res)=>{
                alert(res.data);
                nav("/");
            }) .catch((error)=>{console.log(error)})
        }
        else{
            alert("new passwords mismatch");
        }
        
    }} />
    </>);
}
 
export default Changepassword;