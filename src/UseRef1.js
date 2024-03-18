import React, { useRef } from 'react';

export default function App25() {
  const divRef = useRef(null); // useref is not re render the page
  const handleColorChange = () => {
    divRef.current.style.backgroundColor = 'beige';
    divRef.current.style.color = 'skyblue';
    divRef.current.style.fontSize = '40px';
  };
  return (
    <div ref={divRef}>
      <p>Hello! Welcome to Chinnaswamy's Home</p>
      <button onClick={handleColorChange}>Click</button>
    </div>
  );
};