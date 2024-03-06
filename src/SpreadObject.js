import React from "react";
export default function Spread1(){
    const obj1={name:"Priya"}
   const  obj2={age:20}
    const newObj={...obj1, ...obj2};
    return(
        console.log(newObj)
    )

    // const obj1={name:"Priya" age:23}
    // const  obj2={age:20}
    //  const newObj={...obj1, ...obj2};
    //  return(
    //      console.log(newObj)  // it will be overwrite and the result is: name:priya and age:20
    //  )
}