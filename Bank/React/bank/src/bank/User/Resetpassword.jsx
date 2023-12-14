import { useState } from "react";
import Nav from "./Nav";
import axios from "axios";

const Resetpassword = () => {
    const[reset,setreset]=useState({
        oldpassword:"",
        newpassword:"",
        renewpassword:""
    });
    return (  <>
    <Nav/>
    <h1>Resetpassword</h1>
    <input
        type="text"
        placeholder="enter old password"
        value={reset.oldpassword}
        onChange={(e) => {
          setreset({...reset,oldpassword:e.target.value})
        }}
    />
        <input
        type="text"
        placeholder="enter new password"
        value={reset.newpassword}
        onChange={(e) => {
          setreset({...reset,newpassword:e.target.value})
        }}
    />
        <input
        type="text"
        placeholder="re-enter new password"
        value={reset.renewpassword}
        onChange={(e) => {
          setreset({...reset,renewpassword:e.target.value})
        }}
    />
    <input type="submit" className="btn btn-primary" onClick={()=>{
        if(reset.newpassword!==reset.renewpassword)
        {
            alert("new passwords does not match");
            setreset({
                oldpassword:"",
                newpassword:"",
                renewpassword:""
                })
        }
        else{
            axios.post("http://localhost:8080/resetpassword",{
                userId:window.localStorage.getItem("id"),
                name:reset.oldpassword,
                password:reset.newpassword
            })
            .then((res)=>{
                alert(res.data);
                console.log(res.data);
                setreset({
                oldpassword:"",
                newpassword:"",
                renewpassword:""
                })
            })
        }
    
    }} />
    </>);
}
 
export default Resetpassword;