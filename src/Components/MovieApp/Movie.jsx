import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"



export const Movies = () => {

    const [movData , setMovData] = useState([])
    const [movie , setMovie] = useState([])

    useEffect(() => { getData()},[])

    const getData = () => {

        axios.get("http://localhost:8080/movies").then((res)=> setMovData(res.data))
    }

    const filterValue = (e) => {

        let FilterData = movData.filter((el)=> el.type == e)
        setMovie([...FilterData])
    }

   

    return(

        <>
        
        <div className="nav">
            <li onClick={()=> filterValue("")}>HOME</li>
            <li onClick={()=> filterValue("thrilled")}>Thriller</li>
            <li onClick={()=> filterValue("comedy")}>Comedy</li>
            <li onClick={()=> filterValue("action")}>Action</li>
            <li onClick={()=> filterValue("romantic")}>Romantic</li>
            <li onClick={()=> filterValue("history")}>History</li>
        </div>

        <div className="homePage">
           
            { movie.length > 0 ? 

               movie.map((el) => (
                   <div className="imgBox">
                       <img id="imgIs" src={el.img} />
                   </div>
                ))

                :

                movData.map((el) => (
                    <div className="imgBox">
                        <img id="imgIs" src={el.img} />
                    </div>
                ))
           
            }

        </div>

        
        </>
        
    )
}