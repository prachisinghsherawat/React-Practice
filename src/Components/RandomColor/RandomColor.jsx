import { useState } from "react"



export const RandomColour = () => {

    const [random , setRandom] = useState()

    return(

        <>
            <div className="colorBox">
                <div></div>
                <div></div>
            </div>
        </>
    )
}