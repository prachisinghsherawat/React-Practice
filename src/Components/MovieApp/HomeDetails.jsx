import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"



export const HomeDetails = () => {

    const [details , setDetails] = useState({})

    const {id} = useParams()
    useEffect(()=>{getData()},[])

    const getData = () => {

        axios.get(`http://localhost:8080/movies/${id}`).then((res)=> setDetails(res.data))
    }

    console.log(details)


    return(
        
        <>
        <div className="flexDiv">

            <div className="left">
                <div className="bigImg">
                    <img id="imgIs" src={details.img} />
                </div>
            </div>

            <div className="right">
                <h1>{details.name}</h1>
                <p>{details.type}</p>
                <h3>{details.rating}</h3>
                
            </div>
            
        </div>
        </>
    )
}