import React,{useState} from "react";
//{useState} is a React hook == takes the code we write from reactDOM and displays it;
//without react hook we can not see changes in code; The changes are only visible in the DOM and in the console 
const CountButton = (props) => {  
    //react props gives us a way to change and specify wich counter if we had 2, to make changes to. 
    //Also props are values we can use inside this component

  

    const [currtntCount, setCurrentCount] = useState(0); //this is the hook

    const handleClick = () => {
        setCurrentCount( currtntCount + props.incrementBy);
    };

    const buttonStyles = { //we can use props to style like in css
        //color: "magenta", //here is opject (color:) and value ("magenta")
        //border: "1px solid orange",
        background: props.buttonColor,
        borderRadius: "10px",
    }

    return (
        <div>
            <button style = {buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
            <div>{currtntCount}</div>
        </div>
    );

}

export default CountButton;