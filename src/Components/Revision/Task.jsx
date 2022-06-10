import { useEffect } from "react"
import { useState } from "react"


export const Task = () => {

    let arr = [{ id: 1 , country : "India" } , { id: 2 , country : "Germany" } , { id: 3 , country : "France" } , { id: 4 , country : "America" }]

    let arr1 = 
    
    [   
        { id: 1 , city : "Delhi" } ,{ id: 1 , city : "Mumbai" } , 
        { id: 2 , city : "Berlin" } ,{ id: 2 , city : "Frankfurt" } ,
        { id: 3 , city : "Paris" } , { id: 3 , city : "Lille"}  ,
        { id: 4 , city : "New York" } ,{ id: 4 , city : "Washington"}  
    ]


    // ------------------------------------------------------------------------------------------------------>


    const [ catchId , setCatchId ] = useState(1)
    const [ city , setCity ] = useState([])

    useEffect(()=> {CityFilter()},[catchId])

    const getCity = (e) => {

        const {value} = e.target;
        setCatchId(value)
    }

    const CityFilter = () => {

        let filteredData = arr1.filter((el)=> el.id == catchId)
        setCity([...filteredData])

    }


    return(
        <>

        <label>Countries : </label>

        <select onChange={getCity}>

           {arr.map((el) => (
               <option value={el.id}>{el.country}</option>
           ))}
        </select><br /><br />

        <label>Cities : </label>

        <select>
           {city.map((el) => (
               <option>{el.city}</option>
           ))}
        </select>
        
        </>
    )
}