import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


export const TodoList = () => {

    const [todo , setTodo] = useState([])
    useEffect(()=> {getData()},[])



    const [data , setData] = useState({
        item : "",
        status : false
    })


    // ------------------------------------- POST DATA -------------------------------------------------------------------


    const HandleSubmit = () => {
        axios.post("http://localhost:8080/todos", data).then(()=>getData())
    }


    const HandleChange = (e) => {
        const {id, value} = e.target
        setData({...data , [id] : value})
    }



    // ------------------------------------- GET DATA -------------------------------------------------------------------


    const getData = () => {
        axios.get("http://localhost:8080/todos").then((res)=> setTodo(res.data))
    }




    // ------------------------------------- EDIT DATA -------------------------------------------------------------------


    const setStatus = (id ,status) => {

        status = !status
        let changeStatus = {status}
        axios.patch(`http://localhost:8080/todos/${id}` , changeStatus ).then(()=> getData())
    }




    // ------------------------------------- DELETE DATA -------------------------------------------------------------------



    const DeleteTodo = (id) => {
        axios.delete(`http://localhost:8080/todos/${id}`).then(()=> getData())
    }




    return(


        <>

        <div className="todo">

            <input type="text" placeholder="add your todo" id="item" onChange={HandleChange} />
            <button onClick={HandleSubmit}>Submit</button>

            {todo.map((el)=>(

                <div>
                    {el.id}. {el.item} 

                    {el.status ? 

                        <button onClick={()=> setStatus(el.id, el.status)}>Done</button>
                     : 
                        <button onClick={()=> setStatus(el.id, el.status)} >Not Done</button>  

                    }  
                                               
                        <button onClick={ () => DeleteTodo(el.id)}>Delete</button>

                </div>

            ))}

        </div>

        </>
    )
}