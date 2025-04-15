import React from "react";
import { useRef, useState } from "react";
export default function App11() {
  const msgRef = useRef();
  const [color, setColor] = useState();
  const handleSubmit = () => {
    msgRef.current.style.color = color
  };
  return (
    <div>
      <h3>This is App11</h3>
      <h3>Concept name:</h3> <p>useRef is a hook in React that allows you to create a mutable reference to an element, similar to the ref attribute in class components.</p>
      <p>
        <input type="text" onChange={(e)=>setColor(e.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <p>
        <h4 ref={msgRef}>Hello World</h4>
      </p>
    </div>
  );
}