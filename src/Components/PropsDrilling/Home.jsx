import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"


export const Home = () => {

    const [movieData,setMovieData] = useState([]);

    useEffect(() => {getData()},[])      

    const getData = () => {

        axios.get("http://localhost:8080/movies").then((res)=> setMovieData(res.data))
    }

    return(

        <>

        <div className="nav">
            <li>Comedy</li>
            <li>Thrill</li>
            <li>Action</li>
            <li>History</li>
            <li>Romantic</li>
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