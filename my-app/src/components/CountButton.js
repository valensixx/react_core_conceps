import React,{useState} from "react";
//{useState} is a React hook == takes the code we write from reactDOM and displays it;
//without react hook we can not see changes in code; The changes are only visible in the DOM and in the console 
const CountButton = () => {
    const [currtntCount, setCurrentCount] = useState(0); //this is the hook

    const handleClick = () => {
        setCurrentCount( currtntCount + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>+1</button>
            <div>{currtntCount}</div>
        </div>
    );

}

export default CountButton;