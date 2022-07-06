import { useState } from "react"


export const RandomColour = () => {

    const [random , setRandom] = useState("")
    const [flag , setFlag] = useState(false)

    const setRandomColor = (val) => {

        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        setRandom(randomColor)
        
        if(val == "show"){
            document.getElementById("color").style.backgroundColor = "#" + random
            setFlag(true)
        }
        else if(flag == true){
            document.getElementById("color").style.backgroundColor = "none"
            setFlag(false)
        }
        else{
            document.getElementById("interval").style.backgroundColor = "#" + random
        }
    }
    //console.log(random)

    // setInterval(() => {
    //     setRandomColor()
    // },3000);

    return(

        <>
            <div className="colorBox">

                <div id="color" onClick={() => setRandomColor("show")}></div>

                <div id="interval"></div>
            </div>
        </>
    )
}