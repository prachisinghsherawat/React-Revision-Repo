
import { useState } from "react"



export const ValidOutput = () => {


    const [value , setValue] = useState("")

    const FindValue = (e) => {
        setValue(e.target.value);
    }



    return(

        <>

        <input type="text" placeholder="enter any number" onChange={FindValue} />
        <p>{ value >= 10 ? "Invalid Answer" : "Valid Answer"} </p>

        </>
    )
}
