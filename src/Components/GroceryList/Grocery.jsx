import { useState } from "react"


export const Grocery = () => {

    const [item , setItem] = useState({
        food : "" ,
        status : false
    })
    

    const HandleSubmit = () => {

    }

    return(
        <>

            <input type="text" id="food" placeholder="enter your food item" onChange={(e)=> setItem(e.target.value)}/>
            <button>Submit</button>

        </>
    )
}