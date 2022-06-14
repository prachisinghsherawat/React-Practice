import { useState } from "react"


export const Grocery = () => {



    const [flag , setFlag] = useState(false)
    const [ arr , setArr] = useState([])

    const [item , setItem] = useState({
        food : "" ,
        status : "false"
    })  


    const HandleChange = (e) => {

        const {id , value} = e.target ;
        setItem({...item , [id] : value})
    }


    const HandleSubmit = () => {
        setArr([...arr , item])
        document.getElementById("food").value = " "
    }


    const Delete = (index) => {
        arr.splice(index,1)
        setArr([...arr])
    }

    const setStatus = (index) => {

        let {status} = arr[index]
        status = !flag
        console.log(status)
    }


    return(
        <>
           
           <div className="todo">
                <h1>Grocery List</h1>
                <input type="text" id="food" placeholder="enter your food item" onChange={HandleChange} />

                <button onClick={HandleSubmit}>Submit</button>


                {arr.map((el , index) => (
                    
                   <div>
                        {index+1}  {el.food}  <button onClick={()=>setStatus(index)}>{el.status}</button>  <button onClick={()=>{Delete(index)}}>Delete</button>
                    </div>
                ))}
           
           </div>

           
        </>
    )
}