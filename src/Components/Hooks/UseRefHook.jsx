
// USE REF HOOKS --------------------------------------------------------------------------------------->



// 1. Accessing the  Dom Elements 
// 2. Persist the values after successfull rendering   --------> (store previous values)

import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"

export const UseRefHook = () => {

    const ref = useRef();
    ref.current = "Prachi"

    // console.log(ref)                      //  an object --------> { current : undefined }


    const [counter , setCounter] = useState(0)
    const prev = useRef()                                                      // before page rendered

    useEffect(()=>{prev.current = counter},[counter])                          // after page rendered
    

    return(
        <>
        
        <div className="todo">

        <input type="text" id="name" placeholder="enter your name" defaultValue={ref.current} ref={ref} />
        <button>Submit</button>


        <h2>Current Value : {counter}</h2>
        <h2> Previous Value : {prev.current}</h2>
        <button onClick={()=>setCounter(counter-1)}>-</button>
        <button onClick={()=>setCounter(counter+1)}>+</button>


        

        
        </div>

        </>
    )
}