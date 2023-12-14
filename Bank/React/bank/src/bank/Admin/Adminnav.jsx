import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Adminnav = () => {
    const nav=useNavigate();
    useEffect(() => {
        var de = JSON.parse(window.localStorage.getItem("full"));
        console.log(de);
        document.title = "Admin";
        if (de.role !== "admin") {
          window.localStorage.clear();
          nav("/");
        }
      });
    return (  <> 
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <NavLink className="nav-link" to="/allusers">users</NavLink>   
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/allstatements">statements</NavLink>   
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/admindeposit">deposit</NavLink>   
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/adminwithdraw">withdraw</NavLink>   
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/admintransfer">transfer</NavLink>   
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" onClick={()=>{window.localStorage.clear()}} to="/">logout</NavLink>   
        </li>
    </ul>
    </>);
}
 
export default Adminnav;