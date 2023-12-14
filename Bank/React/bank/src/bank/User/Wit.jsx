import { useState } from "react";
import Nav from "./Nav";
import axios from "axios";
const Wit = () => {
  const [am, setam] = useState();
  return (
    <>
      <Nav />
      <h1>Withdraw</h1>
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
            .post("http://localhost:8080/withdraw", {
              userId: window.localStorage.getItem("id"),
              balance: am,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data === "success") {
                alert("success");
              } else {
                alert("invalid balance");
              }
              setam("");
            })
            .catch((res) => {
              console.log(res);
            });
        }}
      />
    </>
  );
};

export default Wit;
