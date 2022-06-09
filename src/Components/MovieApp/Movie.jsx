import axios from "axios"
import { useEffect } from "react"



export const Movies = () => {

    const [movData , setMovData] =([])
    useEffect(() => { getData()},[])

    const getData = () => {

        axios.get("http://localhost:8080/movies").then((res)=> setMovData(res.data))
    }

    return(

        <>
        
        <div className="nav">
            <li>HOME</li>
            <li>Thriller</li>
            <li>Comedy</li>
            <li>Action</li>
            <li>Romantic</li>
            <li>History</li>
        </div>

        <div>
            {movData.map((el) =>(
                <div>
                    <img src={el.img} />
                </div>
            ))}
        </div>

        
        </>
        
    )
}