import { useState } from "react"
import { Counter } from "./Counter"
import { Todo } from "./Todo"


export const HomePage = () => {

    const [counter , setCounter] = useState(0)
    const [todo , setTodo ] = useState("")
    const [data , setData] = useState([])

    const Increment = () => {
        setCounter(counter+1)
    }

    const Decrement = () => {
        setCounter(counter-1)
    }



    const HandleChange = (e) => {

        const {value} = e.target
        setTodo(value)
    }

    const HandleSubmit = () => {
        setData([...data , todo])
    }

    return(

        <>
        <Counter counter = {counter} Increment ={Increment} Decrement={Decrement}/>
        <Todo HandleSubmit = {HandleSubmit} HandleChange = {HandleChange} data = {data} />
        </>
    )
}