import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
import User from "./User/User";
import Dep from "./User/Dep";
import Wit from "./User/Wit";
import Tra from "./User/Tra";
import Sat from "./User/Sat";
import Allusers from "./Admin/Allusers";
import Allstatements from "./Admin/Allstatements";
import Deposit from "./Admin/Deposit";
import Withdraw from "./Admin/Withdraw";
import Transfer from "./Admin/Transfer";
import Forgetpassword from "./Forgetpassword";
import Resetpassword from "./User/Resetpassword";
import Changepassword from "./Changepassword";
import Otpcheck from "./Otpcheck";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/reg" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/deposit" element={<Dep />} />
        <Route path="/withdraw" element={<Wit />} />
        <Route path="/transfer" element={<Tra />} />
        <Route path="/statment" element={<Sat />} />
        <Route path="/allusers" element={<Allusers/>}/>
        <Route path="/allstatements" element={<Allstatements/>}/>
        <Route path="/admindeposit" element={<Deposit/>}/>
        <Route path="/adminwithdraw" element={<Withdraw/>}/>
        <Route path="/admintransfer" element={<Transfer/>}/>
        <Route path="/forgetpassword" element={<Forgetpassword/>}/>
        <Route path="/resetpassword" element={<Resetpassword/>}/>
        <Route path="/otpcheck" element={<Otpcheck/>}/>
        <Route path="/changepassword" element={<Changepassword/>}/>
      </Routes>

    </>
  );
};

export default App;
