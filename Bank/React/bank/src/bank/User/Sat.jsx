import { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";

const Sat = () => {
  const [Balance, setBalance] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:8080/getstatment", {
        userId: window.localStorage.getItem("id"),
      })
      .then((res) => {
        setBalance(res.data);
      });
  }, []);

  return (
    <>
      <Nav />
      <h1>Statment</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>statementNo</th>
            <th>credit</th>
            <th>debit</th>
            <th>balance</th>
            <th>transdate</th>
            <th>remark</th>
          </tr>
        </thead>
        <tbody>
          {Balance &&
            Balance.map((o) => {
              return (
                <tr>
                  <td>{o.statementId}</td>
                  <td>{o.credit}</td>
                  <td>{o.debit}</td>
                  <td>{o.balance}</td>
                  <td>{o.date}</td>
                  <td>{o.remark}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Sat;
