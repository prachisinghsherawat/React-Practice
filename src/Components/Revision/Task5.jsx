
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const Task5 = () => {

    const [data , setData] = useState([])
    const [search , setSearch] = useState([])

    const getData = () => {
        axios.get("https://fakestoreapi.com/products").then((res) => setData(res.data))
    }
    console.log(data)


    const HandleSearch = (e) => {
        setSearch(e.target.value)
    }


    return(

        <>

        <div className="todo">

        <input type="text" placeholder="enter your cartoon" id="cartoon" onChange={HandleSearch}  />
        <button onClick={getData}>Submit</button>

        {data.map((el) => (

            <div key={el.id}>
                <p>{el.id}.  {el.title}</p>
            </div>
        ))}
        

        </div>

       
        </>
    )
}