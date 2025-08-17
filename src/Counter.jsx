import { useState } from "react"

export default function Counter(){
    const [count,setCount]= useState(0);

    const handleAdd =() =>{
        //    setCount(5)
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleRemove = () => {
     if (count > 0) {
    setCount(count - 1);
  }
  };

  const handleReset = () => {
    setCount(0);
  };


    const counterStyle ={
        border: "2px solid yellow"
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
             <button onClick={handleRemove}>Remove</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}