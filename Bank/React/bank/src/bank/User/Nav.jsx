import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const nav = useNavigate();
  useEffect(() => {
    var de = JSON.parse(window.localStorage.getItem("full"));
   // console.log(de);
    document.title = "User";
    if (de.role !== "user") {
      window.localStorage.clear();
      nav("/");
    }
  });
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/user">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/deposit">
            Deposit
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/withdraw">
            Withdraw
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/transfer">
            Transfer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/statment">
            Statement
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/resetpassword">
            resetpassword
          </NavLink>
        </li>
        <li className="nav-item">
          <p
            className="nav-link"
            onClick={() => {
              window.localStorage.clear();
              nav("/");
            }}
            style={{ cursor: "pointer" }}
          >
            {window.localStorage.getItem("name")+" logout"}
          </p>
        </li>
      </ul>
    </>
  );
};

export default Nav;
