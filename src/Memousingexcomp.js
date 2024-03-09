import React from "react";
import ExpComp from "./excomp";
import { useState } from "react";

export default function Memo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpComp count={count}/>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count{count}
      </button>
    </div>
  );
}