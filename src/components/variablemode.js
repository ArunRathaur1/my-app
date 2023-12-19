import React from "react";
function Variablemode(props){
    function blue(props){
        if(props.bluemode.backgroundColor=="white"){
           props.changebtn2({
            color:"white",
            backgroundColor:"blue"
           })
        }
        else{
            props.changebtn2({
                color:"black",
                backgroundColor:"white"
               })
        }
    }
    return(
    <div class="component mx-5 my-5" style={props.bluemode}>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    change Mode
    </button>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item"onClick={blue}>Black Dark Mode</a></li>
    <li><a class="dropdown-item" href="#">Blue Dark Mode</a></li>
    <li><a class="dropdown-item" href="#">Green Dark Mode</a></li>
    </ul>
    </div>
    </div>
    )
}
export default Variablemode;