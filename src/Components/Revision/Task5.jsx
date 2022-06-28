

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const Task5 = () => {

    const [data , setData] = useState([])
    const [search , setSearch] = useState([])

    useEffect(()=>{getData()},[])

    const getData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => setData(res.data))
    }
    console.log(data)


    const HandleSearch = () => {
        setSearch(e.target.value)
    }
    console.log(search)


    return(

        <>

        <div className="todo">
        <input type="text" placeholder="enter your cartoon" id="cartoon" onChange={HandleSearch}  />
        <button>Submit</button>
        </div>
        
        </>
    )
}