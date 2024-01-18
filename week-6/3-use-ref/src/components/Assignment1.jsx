import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputVal  = useRef();

    useEffect(() => {
       inputVal.current.focus();
    }, [inputVal]);

    const handleButtonClick = () => {
        inputVal.current.focus();
    };

    return (
        <div>
            <input  ref={inputVal} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
