import { useState } from "react"

export const Todo = () => {

    const [todo , setTodo] = useState("")
    const [items , setItems] = useState([])
    const [flag , setFlag] = useState(true)
    const [edit , setEdit] = useState("")
    const [save , setSave] = useState(0)

    const addItems = () => {
        setItems([...items , todo])
    }
    //console.log(items)


    // -------------------------------------- For Delete ------------------------------------------------>

    const Delete = (index) => {
        items.splice(index,1)
        setItems([...items])
    }



    // -------------------------------------- For Edit ---------------------------------------------------->

    const EditTodo = (index) => {
        setFlag(!flag)
        setEdit(items[index])
        setSave(index)
    }



    // -------------------------------------- For Save ---------------------------------------------------->

    const SaveTodo = (index) => {
        items[index] = todo
        setItems([...items])
        setFlag(true)
    }
    
    
    

    return(
        <>

        <h1>TODO LIST</h1>

        {flag ? 
        <div className="todo">
        <label> Todo : </label>
        <input type="text" placeholder="enter your todo" onChange={(e)=> setTodo(e.target.value)} />
        <button onClick={addItems}>Submit</button>

        {items.map((el,index) => (
           <div key={index}>
               <p>{index+1}. {el} </p> 
               <button onClick={()=>Delete(index)}>Delete</button>
               <button onClick={()=>EditTodo(index)}>Edit</button>
           </div>
          
        ))}

    </div>
    
       : 
 
    <div>
        <input type="text" id="" defaultValue={edit} onChange={(e)=> setTodo(e.target.value)} />
        <button onClick={() => SaveTodo(save)}>Save</button>
    </div>
    
    
    } 

        
    </>
)
}
