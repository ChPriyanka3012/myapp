import { useEffect, useState } from "react";

export default function UseEffectfunc(){
    const [runs,setRuns]=useState(0);
    const [wickets,setWickets]=useState(0);
    console.log("Component loaded");
    useEffect(()=>{
        console.log("Better luck next time");
    },[wickets]);
    return(
        <>
        <button onClick={()=>setRuns((prevState)=>prevState+1)}>Runs({runs})</button>
        <button onClick={()=>setWickets((prevState)=>prevState+1)}>Wickets({wickets})</button>
        </>
    )

}