import { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";

const User = () => {
  const [Balance, setBalance] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:8080/balance", {
        userId: window.localStorage.getItem("id"),
      })
      .then((res) => {
        console.log(res.data);
        setBalance(res.data);
      });
  }, []);
  return (
    <>
    <h1>welcome {window.localStorage.getItem("name")}</h1>
      <Nav />
      {Balance && (
        <h1>
          Your Balance <br />
          {Balance}
        </h1>
      )}
    </>
  );
};

export default User;
