import React,{useState, useEffect} from "react";
import "./CountButton.css";
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
    }

    //useEffect hook !!! IMPORTANT to put array []  !!! Whitout [] will be render infinete loop.
    useEffect(() => {
        if(currtntCount === 10){
            //alert("the count is 10");
            setCurrentCount(0);
        }
        //console.log("Called when component mounts or the currentCount is updated!");
    }, [currtntCount]);

    //useEffect(() => {
        //console.log("Only called when component mounts");
    //}, []);

    return (
        <div>
            <button style = {buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
            <div className={"count-display"}>{currtntCount}</div>
        </div>
    );

}

export default CountButton;