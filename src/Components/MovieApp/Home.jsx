import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router";
import { Footer } from "../Footer/Footer";
import { Sorting } from "./Sorting";


export const Home = () => {

    const [sort , setSort] = useState("")

    const [movieData,setMovieData] = useState([]);
    //const [movie , setMovie] = useState("");                      // for backend

    const [filterIs , setFilterIs] = useState([])

    // useEffect(() => {getData()},[movie])                         // for backend
    useEffect(() => {getData()},[sort]) 


    const navigate = useNavigate()

    

    const sortFilter = (e) => {
        setSort(e.target.value)
    }


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
        if(sort == ""){
            axios.get(`http://localhost:8080/movies`).then((res)=>setMovieData(res.data))
        }

        else{
            axios.get(`http://localhost:8080/movies?_sort=name&_order=${sort}`).then((res)=>setMovieData(res.data))
        }
    }
    console.log(sort)

    const MovieCheck = (type) => {
         
        let movieFilter = movieData.filter((el) => el.type == type)
        console.log(movieFilter)
        setFilterIs([...movieFilter])
    }

    return(

        <>

        <div className="nav">
            <li onClick={() => MovieCheck("")}>HOME</li>
            <li onClick={() => MovieCheck("comedy")}>COMEDY</li>
            <li onClick={() => MovieCheck("thrilled")}>THRILLER</li>
            <li onClick={() => MovieCheck("action")}>ACTION</li>
            <li onClick={() => MovieCheck("history")}>HISTORY</li>
            <li onClick={() => MovieCheck("romantic")}>ROMANTIC</li>
        </div>


        <div className="movieSort">
            <Sorting sortFilter = {sortFilter} sort = {sort} />
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
                    <div onClick={()=> navigate(`/details/${el.id}`)} className="imgBox">
                        <img id="imgIs" src={el.img}/>
                    </div>

                ))

                :

                movieData.map((el)=>(

                    <div onClick={()=> navigate(`/details/${el.id}`)} className="imgBox">
                        <img id="imgIs" src={el.img}/>
                    </div>
            
                ))


            }

        </div>

        <Footer />

        </>
    )
}