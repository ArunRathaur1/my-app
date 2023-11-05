import React from 'react';
import { useState } from 'react';
export default function TextConver(){
    let[text,TextConverter]=useState("Enter Your Text Here")
    function convert() {
        TextConverter("You have clicked on Cick button");
        TextConverter(text.toUpperCase());
    }
    function fun2(event) {
        TextConverter(event.target.value);
        
    }
    return(

        <>
        <div><textarea rows='20' cols='100' value={text} onChange={fun2}/></div>
        <div><button onClick={convert}>Click to Upper Case</button></div>
        </>
    )
}