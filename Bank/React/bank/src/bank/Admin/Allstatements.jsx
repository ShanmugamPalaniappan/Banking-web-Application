import { useEffect, useState } from "react";
import Adminnav from "./Adminnav";
import axios from "axios";

const AllStatements = () => {
    const[st,setst]=useState();
    useEffect(()=>{
        axios.get("http://localhost:8080/allstatements")
        .then((res)=>{
            setst(res.data);
            console.log(res.data);
        })
    },[])
    return ( <>
    <Adminnav/>
    <table className="table table-bordered">
        <thead >
            <tr>
                <td>accountid</td>
                <td>balance</td>
                <td>debit</td>
                <td>credit</td>
                <td>receiver</td>
                <td>sender</td>
                <td>statementId</td>
                <td>date</td>
                <td>remark</td>
            </tr>
        </thead>
        <tbody>
            {
                st&&st.map((s)=>{
                    console.log(s);
                    return(
                        
                    <tr>
                        <td>{s.u.userId}</td>
                        <td>{s.balance}</td>
                        <td>{s.debit}</td>
                        <td>{s.credit}</td>
                        <td>{s.receiver}</td>
                        <td>{s.sender}</td>
                        <td>{s.statementId}</td>
                        <td>{s.date}</td>
                        <td>{s.remark}</td>
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
    </> );
}
 
export default AllStatements;