import { useRef } from "react"


export const Hooks = () => {

    const ref = useRef();
   // console.log(ref)                      //  an object ----> { current : undefined }

    ref.current.value = "Prachi"

    return(
        <> 
        <input type="text" id="name" placeholder="enter your name"  ref={ref} />
        <button>Submit</button>
        </>
    )
}