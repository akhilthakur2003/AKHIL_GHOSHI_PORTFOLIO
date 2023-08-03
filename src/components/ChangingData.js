

import React from "react";
import { useState } from "react";

const arr=[
    "c language",
    "cpp",
    "javascript",
    "HTML",
    "CSS",
    "SQL",
]
let i = 0;
let valu=arr.length;
export default function ChangingData() {
    const [myAchivements,setMyAchivements] = useState('');
    
    setInterval(() => {
      setMyAchivements(arr[i]);
      i = (i+1)%valu;
    }, 2000);
    const [count, setCount] = useState(0);
    function handleClick() {
      setCount((count+1)%valu);
    }
  
    return (
      <div>
        <h1>
        {myAchivements}
        {/* {arr.map((elem,ind)=>{
            <div>elem</div>
        })} */}
        </h1>
      </div>
    );
  }

  
function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Learn {arr[count]}
      </button>
    );
  }
