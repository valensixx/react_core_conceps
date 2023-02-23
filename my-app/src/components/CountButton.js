import React,{useState} from "react";
//{useState} is a React hook == takes the code we write from reactDOM and displays it;
//without react hook we can not see changes in code; The changes are only visible in the DOM and in the console 
const CountButton = (props) => {  //react props gives us a way to change and specify wich counter if we had 2, to make changes to. 
    //Also props are values we can use inside this component
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