import { useState } from "react"

export const Todo = () => {

    const [todo , setTodo] = useState("")
    const [items , setItems] = useState([])
    const [flag , setFlag] = useState(false);

    const addItems = () => {
        setItems([...items , todo])
    }
    console.log(items)


    // For Delete ------------------------------------------------>

    const Delete = (index) => {
        items.splice(index,1)
        setItems([...items])
    }

    // For Edit ---------------------------------------------------->

    const Edit = () => {
        
    }

    return(
        <>

        <h1>TODO LIST</h1>
        <div className="todo">
            <label> Todo : </label>
            <input type="text" placeholder="enter your todo" onChange={(e)=> setTodo(e.target.value)} />
            <button onClick={addItems}>Submit</button>

            {items.map((el,index) => (
               <div key={index}>
                   <p>{index+1}. {el} </p> 
                   <button onClick={()=>Delete(index)}>Delete</button>
                   <button onClick={()=>Edit(index)}>Edit</button>
               </div>
              
            ))}

        </div>

       

        </>
    )
}