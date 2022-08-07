import { useRef } from "react";

const Start = ({setUsername}) => {
    const inputRef = useRef() ;
    const handleClick = () =>{
        inputRef.current.value && setUsername(inputRef.current.value) ;
    }
    return (
        <div className="start-container">
            <input placeholder="Enter Your Name" className="start-input" ref={inputRef}/>
            <button className="start-button" onClick={handleClick}>Start</button>
        </div>
      );
}
 
export default Start;