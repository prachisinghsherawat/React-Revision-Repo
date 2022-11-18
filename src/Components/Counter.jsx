import { useState } from "react"


export const Counter = () => {

    let [count,setCount] = useState(0);

    const Decrement = () => {
        setCount(count-1)
    }

    const Increment = () => {
        setCount((count)=> count+1)
        setCount((count)=> count+1)          // (asynchronous behaviour of usestate)
    }

    return(

        <>
        <div className="div">
            <button disabled={count==0} onClick={Decrement}>-</button>
            <p>{count}</p>
            <button onClick={Increment}>+</button>
        </div>
        </>
    )
}