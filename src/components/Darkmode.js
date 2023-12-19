import React from "react";
import { useState } from "react";
function Darkmodee(props){
    return(
        <>
        <div className="container" style={props.mode}>
        <div className="mb-3">
  <label  className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div classNameName="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" className="btn btn-primary mx-5 my-3" onClick={props.tooglemode}>{props.btn}</button>
</div>

</>
    )
}
export default Darkmodee;