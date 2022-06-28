

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const Task5 = () => {

    const [data , setData] = useState([])
    useEffect(()=>{getData()},[])

    const getData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => setData(res.data))
    }
    console.log(data)


    return(

        <>

        <div className="todo">
        <input type="text" placeholder="enter your cartoon" id="cartoon"  />
        <button>Submit</button>
        </div>
        
        </>
    )
}