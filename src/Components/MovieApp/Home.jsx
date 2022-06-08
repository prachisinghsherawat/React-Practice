import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"


export const Home = () => {

    const [movieData,setMovieData] = useState([]);
    const [movie , setMovie] = useState("")

    useEffect(() => {getData()},[movie]) 


    

    // ------------------------ Using Backend ----------------------------------------------------------->



    // const getData = () => {

    //     if(movie == ""){
    //         axios.get(`http://localhost:8080/movies`).then((res)=> setMovieData(res.data))
    //     }
    //     else{
    //         axios.get(`http://localhost:8080/movies?type=${movie}`).then((res)=> setMovieData(res.data))
    //     }
        
    // }

    const MovieCheck = (el) => {
        setMovie(el)
    }


    return(

        <>

        <div className="nav">
            <li onClick={() => MovieCheck("")}>Home</li>
            <li onClick={() => MovieCheck("comedy")}>Comedy</li>
            <li onClick={() => MovieCheck("thrilled")}>Thrilled</li>
            <li onClick={() => MovieCheck("action")}>Action</li>
            <li onClick={() => MovieCheck("history")}>History</li>
            <li onClick={() => MovieCheck("romantic")}>Romantic</li>
        </div>

        <div className="homePage">
            {movieData.map((el)=>(

                <div className="imgBox">
                    <img id="imgIs" src={el.img}/>
                </div>
        
            ))}
        </div>

        </>
    )
}