import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Footer } from "../Footer/Footer";


export const Home = () => {

    const [movieData,setMovieData] = useState([]);
    //const [movie , setMovie] = useState("");                      // for backend

    const [filterIs , setFilterIs] = useState([])

    // useEffect(() => {getData()},[movie])                         // for backend
    useEffect(() => {getData()},[]) 




    // ------------------------ Filter Using Backend ----------------------------------------------------------->



    // const getData = () => {

    //     if(movie == ""){
    //         axios.get(`http://localhost:8080/movies`).then((res)=> setMovieData(res.data))
    //     }
    //     else{
    //         axios.get(`http://localhost:8080/movies?type=${movie}`).then((res)=> setMovieData(res.data))
    //     }
        
    // }





    // -------------------------- Filter From Frontend ----------------------------------------------->


    const getData = () => {
        axios.get(`http://localhost:8080/movies`).then((res)=>setMovieData(res.data))
    }


    const MovieCheck = (type) => {
         
        let movieFilter = movieData.filter((el) => el.type == type)
        console.log(movieFilter)
        setFilterIs([...movieFilter])
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




        {/* ------------------------------------- Normal Rendering -------------------------------------------- */}


        {/* <div className="homePage">
            {movieData.map((el)=>(

                <div className="imgBox">
                    <img id="imgIs" src={el.img}/>
                </div>
        
            ))}
        </div> */}





        {/* --------------------------------- Conditional Rendering ------------------------------------------- */}


        <div className="homePage">
            
            {filterIs.length ? 
            
                filterIs.map((el)=>(
                    <div className="imgBox">
                        <img id="imgIs" src={el.img}/>
                    </div>

                ))

                :

                movieData.map((el)=>(

                    <div className="imgBox">
                        <img id="imgIs" src={el.img}/>
                    </div>
            
                ))


            }

        </div>

        <Footer />

        </>
    )
}