import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Userlogin from './Userlogin.jsx';
import Useroperations from './Useroperations.jsx';
import Checkbalance from './Checkbalance.jsx';
import{getuser} from './User.js';
import Withdraw from './Withdraw.jsx';
import Deposit from './Deposit.jsx';
import Transfer from './Transfer.jsx';
class App extends Component {
  state = {x:0,user:getuser() } 
  gotohome=()=>
  {
    this.setState({x:0})
  }
  gotouseroperations=(c)=>{
    this.setState({x:3,ud:c})
    //console.log(this.state.ud);
  }
  gotocheckbalance=(c)=>{
    this.setState({x:4,ud:c})
  }
  gotowithdraw=(c)=>{
    this.setState({x:5,ud:c})
  }
  gotodeposit=(c)=>{
    this.setState({x:6,ud:c})
  }
  gototransfer=(c)=>{
    this.setState({x:7,ud:c})
  }
  render() { 
    if(this.state.x===0)
    {
      return (
        <>
        <h1>
          <button onClick={()=>{this.setState({x:1})}}>admin login</button>
          <button onClick={()=>{this.setState({x:2})}}>user login</button>
        </h1>
        </>
      );
    }
    else if(this.state.x===1){
      return (
        <>
        <button onClick={()=>{
          this.setState({x:0})
        }}> home</button>
        <h1> 
          welcome to admin page
        </h1>
        </>
      );
    }
    else if(this.state.x===2){
      return (
        <>
        <Userlogin 
        gotohome = {this.gotohome}
        gotouseroperations={this.gotouseroperations}
        user={this.state.user}
        />
      </>
      );
    }
    else if(this.state.x===3){
      return (
        <>
        <Useroperations
       // user={this.state.user}
        ud={this.state.ud}
        gotohome={this.gotohome}
        gotocheckbalance={this.gotocheckbalance}
        gotowithdraw={this.gotowithdraw}
        gotodeposit={this.gotodeposit}
        gototransfer={this.gototransfer}
        />
      </>
      );
    }
    else if(this.state.x===4){
      return (
      <>
      <Checkbalance 
      ud={this.state.ud}
      gotohome={this.gotohome}
      gotouseroperations={this.gotouseroperations}
      />
      </>
      );
    }
    else if(this.state.x===5){
      return (
      <>
      <Withdraw 
      ud={this.state.ud}
      gotocheckbalance={this.gotocheckbalance}
      gotouseroperations={this.gotouseroperations}
      />
      </>
      );
    }
    else if(this.state.x===6){
      return (
      <>
      <Deposit
      ud={this.state.ud}
      gotocheckbalance={this.gotocheckbalance}
      gotouseroperations={this.gotouseroperations}
      />
      </>
      );
    }
    else if(this.state.x===7){
      return (
      <>
      
      <Transfer
      user={this.state.user}
      ud={this.state.ud}
      gotocheckbalance={this.gotocheckbalance}
      gotouseroperations={this.gotouseroperations}
      />
      </>
      );
    }
  }
}
 
export default App;

