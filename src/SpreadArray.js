import React from "react";

export default function SpreadArrayPush(){
    const Student=[{name:"Sandy",age:30},
                    {name:"Ruby",age:32}];
                //Student.push({name:"Priya",age:23});
               const newArr=[...Student,{name:"Priya",age:23}]
                
    return(console.log(Student));
}