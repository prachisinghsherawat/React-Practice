import { useReducer, useState } from "react"

const Reducer = (state , {type , payload}) => {
    
}

export const UseReducerHook = () => {

    const initState = {counter : 0} 

    const [counter , dispatch] = useReducer(Reducer , initState)          //  useReducer(function , object)
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