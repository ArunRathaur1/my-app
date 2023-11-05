import React from 'react';
import { useState } from 'react';
function TextConveter2(){
    const[text,Texttaker]=useState("This is the text");
    function first(event){
        Texttaker(event.target.value.toUpperCase());
    }
    return(
        <>
        <div className="form-floating">
        <textarea value={text} onChange={first}></textarea>
        <label >Comments</label>
        </div>
        </>
    )
}
export default TextConveter2;