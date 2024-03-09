import { useState } from "react";

export default function UseStatefunc(){
    const [runs,setCount]=useState(0);
   console.log("component loaded");
    return(
        <>
        <button onClick={()=>setCount((prevState)=>prevState+1)}>Runs({runs})</button>
        </>
    )
}