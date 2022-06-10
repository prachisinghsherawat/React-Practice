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

            <div className="rightBox">
                <h1>Movie Name : {details.name}</h1>
                <h1>Category : {details.type}</h1>
                <h1>Rating : {details.rating}</h1>
                
            </div>
            
        </div>
        </>
    )
}