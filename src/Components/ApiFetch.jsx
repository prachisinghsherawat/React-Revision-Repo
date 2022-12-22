import axios from "axios"
import { useEffect, useState } from "react"



export const ApiFetch = () => {

    const [data , setData] = useState()

    useEffect(() => {getData()},[])

    const getData = () => {
         axios.get("https://dummyjson.com/products").then((res)=> setData(res.data))
    }
    console.log(data?.products)



    return(

        <>
        
        {data?.products?.map((el)=>(
            <div>
                <p>{el.title}</p>
            </div>
        ))}

        </>
    )
}
