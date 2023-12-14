import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
 // const [name, setname] = useState("");

 // const [password, setpassword] = useState();
  const[user,setuser]=useState({
    name:"",
    password:""
  });
  const nav = useNavigate();
  return (
    <>
      <div class="form-group">
        <label for="email">Id</label>
        <input
          type="text"
          class="form-control"
          id="email"
          value={user.name}
          onChange={(e) => {
            //setname(e.target.value);
            setuser({...user,name:e.target.value})
          }}
        />
      </div>

      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          class="form-control"
          id="pwd"
          value={user.password}
          onChange={(e) => {
            //setpassword(e.target.value);
            setuser({...user,password:e.target.value})
          }}
        />
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => {
          axios
            .post("http://localhost:8080/login", {
              userId: user.name,
              password: user.password,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data.role === "user") {
                window.localStorage.setItem("full", JSON.stringify(res.data));
                window.localStorage.setItem("id", res.data.userId);
                window.localStorage.setItem("role", res.data.role);
                window.localStorage.setItem("name", res.data.name);
                nav("/user");
              } else if(res.data.role === "admin"){
                window.localStorage.setItem("full", JSON.stringify(res.data));
                window.localStorage.setItem("id", res.data.userId);
                window.localStorage.setItem("role", res.data.role);
                window.localStorage.setItem("name", res.data.name);
                nav("/admin");
              }
              else{
                alert("invalid credentials");
                setuser({
                  name:"",
                  password:""
                });
              }
            });
        }}
      >
        Submit
      </button>
      <button className="btn btn-success" on onClick={()=>{
        nav("/reg");
      }}>Register</button><br/>
      <NavLink to="/forgetpassword">Forget password?</NavLink>

    </>
  );
};

export default Login;
