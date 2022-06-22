import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"


export const Home = () => {

    const [data , setData] = useState([])
    const [store , setStore] = useState([])

    const HandleSubmit = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${store}`).then((res) => setData(res.data))
    }
    console.log(data)


    const StoredData = (e) => {
        setStore(e.target.value)
    }

    

    return(

        <>

        <input type="text" placeholder="enter your pokemon" onChange={StoredData} />
        <button onClick={HandleSubmit}>Submit</button>

        {JSON.stringify(data)}

        

        </>
    )
}