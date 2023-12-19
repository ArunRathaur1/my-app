import React from 'react';
import Darkmodee from './components/Darkmode';
import Alert from './components/Alert';
import NevBar from './components/nevbar';
import { useState } from 'react';
function App() {
  let mystyle={
    color:"black",
    backgroundColor:"white"
  }
const[btn,chanebtn]=useState("Enable Dark Mode");
const[bluemode,changebtn2]=useState({
  color:"black",
  backgroundColor:"white"
});
const[mode,changemode]=useState(mystyle);
const[alert,showAlert]=useState(null);
function tooglemode(){
  if(btn==="Enable Dark Mode"){
    changemode({
      color:"white",
      backgroundColor:"black"
    });
    chanebtn("Enable Light Mode");
    callAlert("Success","Dark Mode is Enabled success fully");
    setTimeout(() => {
      showAlert(null);
    }, 1500);
  }
  else{
    chanebtn("Enable Dark Mode");
    callAlert("Success"," Mode is Enabled success fully");
    changemode({
      color:"black",
      backgroundColor:"white"
    });
    setTimeout(() => {
      showAlert(null);
    }, 1500);
   }
}
function callAlert(title,heading){
  showAlert({
    title:title,
    heading:heading 
  })
 }
  return (
    <>
    <NevBar bluemode={bluemode} chanebtn={changebtn2}></NevBar>
    <Darkmodee mode={mode} btn={btn}  tooglemode={tooglemode} alertfunction={callAlert}></Darkmodee>
    <Alert alert={alert} ></Alert>
    </>
    
);
 
}

export default App;
