import React from "react";
export default function Spread(){
        const arr1=[1,2,5]
        const arr2=[7,3,2]
        const newArr=[...arr1, ...arr2];
    return(
        console.log(newArr)
    )
}