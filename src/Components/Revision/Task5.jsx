

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const Task5 = () => {

    const [data , setData] = useState([])
    const [search , setSearch] = useState([])

    const getData = () => {
        axios.get("").then((res) => setData(res.data))
    }
    console.log(data)


    const HandleSearch = (e) => {
        setSearch(e.target.value)
    }
    //console.log(search)


    return(

        <>

        <div className="todo">
        <input type="text" placeholder="enter your cartoon" id="cartoon" onChange={HandleSearch}  />
        <button onClick={getData}>Submit</button>
        </div>
        
        </>
    )
}