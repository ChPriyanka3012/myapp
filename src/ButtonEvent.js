import React from "react";

export default function buttonEvent(){
    const handleClick=()=>{
        alert("Hi! This is Sandy");
    }
    return (
    <div>
        <button onClick={handleClick}>Click me</button>
    </div>)
}