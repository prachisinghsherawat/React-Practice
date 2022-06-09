import { useState } from "react"

export const UseMemoHook = () => {

    const [todo , setTodo] = useState([])
    const [items ,setItems] = useState("")
    const [counter , setCounter] = useState(0)
    

    const AddTodo = () => {
        setTodo([...todo , items])

    }

    const Increment = () => {
        setCounter(counter+1)
    }

    const Decrement = () => {
        setCounter(counter-1)
    }


    return(

        <div className="todo">

            <label>Todo : </label><br /><br />
            <input type="text" placeholder="enter the todo" onChange={(e)=>setItems(e.target.value)} /> 
            <button onClick={AddTodo}>Submit</button> <br /><br />

            {todo.map((el,index) =>(
                <div key={index}>
                    {el}
                </div>
            ))}

            <hr />  

            <h2> Counter : {counter} </h2>

            <button onClick={Decrement}>-</button>
            <button onClick={Increment}>+</button>

        </div>
    )
}