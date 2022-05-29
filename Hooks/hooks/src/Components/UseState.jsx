import { useState } from "react"

export const UseStateHook = () => {

    const [name , setName] = useState("Prachi");
    const [flag , setFlag] = useState(false);
    const [steps ,setSteps] = useState(0);
    const [colors , setColors] = useState([])

    let changeName = () => {
        // setName("Singh")
        setFlag(!flag);
    }

    let increment = () => {
        setSteps(steps+1)
    }

    let decrement = () => {
        setSteps(steps-1)
    }

    let AddColors = (e) => {
        e.preventDefault()

        

    }
    

    return(

        <>
        {/* <h1> Hello , {name} </h1> */}

        <h1> Hello , {flag ? name : "" } </h1>
        <button onClick={changeName}> CLICK ME </button>

        <hr />


        {/* ------------------------------------------------------------------------------------------- */}

        <h1>{steps}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <hr />


        {/* -------------------------------------------------------------------------------------------- */}
        

        <form>
            <input type="text" id="input" placeholder="enter your colour"/>
            <input type="submit" id="submit"/>
        </form>

        </>
    )
}