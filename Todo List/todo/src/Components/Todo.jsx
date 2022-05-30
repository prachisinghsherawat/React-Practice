import { useState } from "react"

export const Todo = () => {

    const [todo , setTodo] = useState("")
    const [items , setItems] = useState([])

    const addItems = () => {
        setItems([...items , todo])
    }
    console.log(items)

    return(
        <>

        <h1>TODO LIST</h1>
        <div className="todo">
            <label> Todo : </label>
            <input type="text" placeholder="enter your todo" onChange={(e)=> setTodo(e.target.value)} />
            <button onClick={addItems}>Submit</button>
        </div>

        {items.map(el => (
           <p>{el}</p>
        ))}

        </>
    )
}