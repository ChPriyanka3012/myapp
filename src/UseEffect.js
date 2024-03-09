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
//using the two components runs,wickets
// const [runs, setRuns] = useState(0);
// const [wickets, setWickets] = useState(0);
// // console.log("Component loaded");
// useEffect(() => {
//   if (wickets > 0) console.log(`Wickets:${wickets}.Better Luck Next Time!`);
// }, [wickets]);

// useEffect(() => {
//   if (runs > 0) console.log(`Good Job! Score:${runs}`);
// }, [runs]);

// return (
//   <>
//     <button onClick={() => setRuns((prevState) => prevState + 1)}>
//       Runs({runs})
//     </button>
//     <button onClick={() => setWickets((prevState) => prevState + 1)}>
//       Wickets({wickets})
//     </button>
//   </>
// );
// }