import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



/*const otpgenerate=()=>{
      var otp1="";
			//for( i=1;i<=4;i++)
			//{
				//Random r=new Random();
				otp1+=Math.floor(Math.random()*10000);
        console.log("otp1 "+otp1);
			//}
  return otp1;
}*/

const Forgetpassword = () => {
  const nav=useNavigate();
    const[data,setdata]=useState({
      id:"",
     // otp:"",
      userotp:""
    });
    return (  <>
    <h1>Forgetpassword</h1>
    <input
        type="text"
        placeholder="enter your id"
        value={data.id}
        onChange={(e) => {
          setdata({...data,id:e.target.value});
        }}
    />
    <input
        type="submit"
        className="btn btn-primary"
        onClick={() => {
            axios.post("http://localhost:8080/forgetpassword",{
              userId:data.id
              
            }).then((res)=>{
              if(res.data!=="failed")
              {
               // setdata({...data,otp:res.data+""})
                window.localStorage.setItem("id",data.id);
                window.localStorage.setItem("otp",res.data+"");
                alert("otp sent");
                nav("/otpcheck");
              }
              else{
                alert(res.data);
              }
            }).catch((error)=>{
              console.log(error);
            })
        }
      }

    /><br/>
    {/* <input type="text" placeholder="enter otp" value={data.userotp}
    onChange={(e) => {
      setdata({...data,userotp:e.target.value});
    }}/> */}
    {/* <input type="submit" value="otp" className="btn btn-success" onClick={()=>{
      if(data.otp===data.userotp)
      {
        alert("success");
        window.localStorage.setItem("id",data.id);
        nav("/changepassword");
      }
      else{
        alert("failed");
        console.log(data);
      }
    }} /> */}
    </>);
}
 
export default Forgetpassword;