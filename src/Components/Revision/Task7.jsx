import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import axios from "axios"


export const Task7 = () => {

    const [data , setData] = useState([])
    const [stored , setStored] = useState([])
    const {id} = useParams()

    useEffect(()=>{getData()},[])
    useEffect(()=>{getFilteredData()},[])

    const getData = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((res) => setData(res.data.categories))
    }
    //console.log(data)


    const getFilteredData = () => {
        let filteredData = data.filter((el) => el.idCategory == id)
        setStored([...filteredData])
    }
    //console.log(stored)

    return(

        <>

        {stored.map((el) => (
            <div>

                <img src={el.strCategoryThumb} />
                <h1>{el.strCategory}</h1>

            </div>
        ))}

        </>
    )
}