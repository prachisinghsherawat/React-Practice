import { useState } from "react"
import { Counter } from "./Counter"
import { Todo } from "./Todo"


export const HomePage = () => {

    const [counter , setCounter] = useState(0)

    const Increment = () => {
        setCounter(counter+1)
    }

    const Decrement = () => {
        setCounter(counter-1)
    }

    return(

        <>
        <Counter counter = {counter} Increment ={Increment} Decrement={Decrement}/>
        <Todo />
        </>
    )
}