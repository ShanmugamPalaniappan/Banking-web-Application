import Adminnav from "./Admin/Adminnav";

const Admin = () => {
    return ( <>
    <h1>Welcome {window.localStorage.getItem("name")} </h1>
    <Adminnav/>
       
        
    </> );
}
 
export default Admin;