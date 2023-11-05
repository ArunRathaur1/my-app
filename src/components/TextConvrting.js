import React from 'react';
import { useState } from 'react';
import "../cssfiles/TextConvrting.css";
function Texting() {
    const[output,converter]=useState("This is the defalut text");
    function UpperCaseConverter(){
        converter(output.toUpperCase());
    }
    function LowerCaseConverter(){
        converter(output.toLowerCase());
    }
    function changingfunction(event){
        converter(event.target.value);
    }
    return(
        <>
        <div className="form-floating">
        <textarea className="form-control div1" cols="15" id="floatingTextarea"value={output} onChange={changingfunction}></textarea>
        <button type="button" class="btn btn-primary mx-2" onClick={UpperCaseConverter}>Conver to Upper Case</button>
        <button type="button" class="btn btn-primary mx-5" onClick={LowerCaseConverter}>Conver to Lower  Case</button>
        </div>
        <h4>Text Summery</h4>
        <h2>Privew</h2>
        <h6>{output}</h6>
        <h1>Total Number of letter={output.length}</h1>
        <h1>Total Number of words={output.split(" ").length}</h1>
        </>
    )
}
export default Texting;