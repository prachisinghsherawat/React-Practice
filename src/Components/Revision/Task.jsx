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


    const [cityId , setCityId ] = useState(1)

    let getCity = (e) => {

        const {value} = e.target;
        setCityId(value)
    }

    let cityFilter = (e) => {
        
        let findCity = cityId.filter((el) => el.value == e )
        
    }


    return(
        <>

        <label>Countries</label>

        <select  onChange={getCity}>

           {arr.map((el) => (
               <option value={el.id}>{el.country}</option>
           ))}
        </select>

        <label>Cities</label>

        <select>
           {arr1.map((el) => (
               <option>{el.cities}</option>
           ))}
        </select>
        
        </>
    )
}