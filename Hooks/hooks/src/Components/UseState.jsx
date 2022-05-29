import { useState } from "react"


export const UseStateHook = () => {

    const [name , setName] = useState("Prachi")

    let changeName = () => {
        setName("Singh")
    }

    return(

        <>
        <h1>Hello , {name}</h1>
        <button onClick={changeName}>CLICK ME</button>
        </>
    )
}