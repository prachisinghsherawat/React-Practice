import { useState } from "react"



export const RandomColour = () => {

    const [random , setRandom] = useState("")

    const setRandomColor = () => {

        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        setRandom(randomColor)

        document.getElementById("color").style.backgroundColor = "#" + random
    }
    console.log(random)

    return(

        <>
            <div className="colorBox">

                <div id="color" onClick={setRandomColor}></div>
                <div></div>
            </div>
        </>
    )
}