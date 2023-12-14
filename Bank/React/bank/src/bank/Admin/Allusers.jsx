import axios from "axios";
import { useEffect, useState } from "react";
import Adminnav from "./Adminnav";

const Allusers = () => {
    const [users,setusers]=useState();
    useEffect(()=>{
        axios
        .get("http://localhost:8080/allusers")
        .then((res)=>{
            setusers(res.data);
           // console.log(res.data);
        })
    },[])
    return (  <>
    <Adminnav/>
    <table className="table table-bordered">
        <thead>
            <tr>
                <td>Userid</td>
                <td>email</td>
                <td>name</td>
                <td>password</td>
                <td>balance</td>
                <td>role</td>
            </tr>
        </thead>
        <tbody>
           {users && users.map((user)=>{
            return(
            <tr>
                <td>{user.userId}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
                <td>{user.role}</td>
            </tr>
            )
           })
        } 
        </tbody>
    </table>
    </>);
}
 
export default Allusers;