import { useState } from "react";

export default function UseStatefunc(){
    const [runs,setCount]=useState(0);
    const [wickets,setVal]=useState(0);
    console.log("Component reload");
    if(wickets>0){
        console.log("hi hello")
    }
    else if(runs>0){
        console.log("good evening")
    }
    return(
        <>
        <button onClick={()=>setCount((prevState)=>prevState+1)}>Runs({runs})</button>
        <button onClick={()=>setVal((prevState)=>prevState+1)}>Wickets({wickets})</button>
        
        </>
    )
}