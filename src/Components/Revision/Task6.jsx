
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const Task6 = () => {

    const [data , setData] = useState([])
    useEffect(() => {getData()},[])

    const getData = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((res) => setData(res.data.categories))
    }
    console.log(data)

    return(

        <>
        <div className="grid">
        {data.map((el) => (
            <div>

                <img src={el.strCategoryThumb} />
                <h1>{el.strCategory}</h1>

            </div>
        ))}
        </div>
        </>
    )
}