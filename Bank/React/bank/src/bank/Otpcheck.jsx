import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otpcheck = () => {
    const nav=useNavigate();
    const[data,setdata]=useState({
        userotp:""
    });
    return (<>
    <h6>otp check</h6>
    <input type="text" placeholder="enter otp" value={data.userotp}
    onChange={(e) => {
      setdata({...data,userotp:e.target.value});
    }}/>

<input type="submit" value="otp" className="btn btn-success" onClick={()=>{
      if(window.localStorage.getItem("otp")===data.userotp)
      {
        alert("success");
        //window.localStorage.setItem("id",data.id);
        nav("/changepassword");
      }
      else{
        alert("failed");
        console.log(data);
      }
    }} />
    </>  );
}
 
export default Otpcheck;