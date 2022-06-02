import { useReducer, useState } from "react"


export const UseReducerHook = () => {

    const initState = {counter : 0} 

    const [counter , dispatch] = useReducer(reducer , initState)          //  useReducer(function , object)
    console.log(useReducer())

    return(
        <>

        <div className="todo">

            <h2> Counter : {counter} </h2>

            <button>-</button>
            <button>+</button>

        </div>

        </>
    )
}