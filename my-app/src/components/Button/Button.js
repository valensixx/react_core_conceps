import React, { Children } from "react";

const Button = (props) =>{
    return <div style={{color:"orange", background:"green", borderRadius:"5px"}}>{props.buttonText}
    {props.children}
    </div>

    
};

export default Button;