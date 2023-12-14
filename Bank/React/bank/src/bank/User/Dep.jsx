import { useState } from "react";
import Nav from "./Nav";
import axios from "axios";

const Dep = () => {
  const [am, setam] = useState();
  return (
    <>
      <Nav />
      <h1>Deposit</h1>
      <input
        type="text"
        placeholder="enter amount"
        value={am}
        onChange={(e) => {
          setam(e.target.value);
        }}
      />
      <input
        type="submit"
        onClick={() => {
          axios
            .post("http://localhost:8080/deposit", {
              userId: window.localStorage.getItem("id"),
              balance: am,
            })
            .then((res) => {
              alert("success");
              setam("");
            })
            .catch((res) => {
              alert(res.data);
              console.log(res.data);
            });
        
        }      
      }
      />
    </>
  );
};

export default Dep;
