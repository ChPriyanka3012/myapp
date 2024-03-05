import React from "react";
//without passing an argument

export default function buttonEvent(){
    const handleClick=()=>{
        alert("Hi! This is Sandy");
    }
    return (
    <div>
        <button onClick={handleClick}>Click me</button>
    </div>)
}


//passing an argument

// export default function buttonEvent(){
//     const handleClick=(msg)=>{
//         alert(msg);
//     }
//     return (
//     <div>
//         <button onClick={()=>handleClick('Hi! This is Sandy')}>Click me</button>
//     </div>)
// }