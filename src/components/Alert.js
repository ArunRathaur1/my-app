import React from "react";
function Alert(props){
        if(props.alert!==null){
            return(
                <div class="alert alert-primary" role="alert">
               {props.alert.title}.{props.alert.heading}.
               </div>
           )
        }
    }
export default Alert