import { useState } from "react";


export const ColorBox = () => {

    const [color , setColor] = useState("")

    const RandomColorGenerator = (val) => {

        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor)

        if(val == "first"){
            document.querySelector("#one").style.backgroundColor = "#" + color
        }
        else if(val == "second"){
            document.querySelector("#two").style.backgroundColor = "#" + color
        }
        else if(val == "third"){
            document.querySelector("#three").style.backgroundColor = "#" + color
        }
        else if(val == "fourth"){
            document.querySelector("#four").style.backgroundColor = "#" + color
        }
        else if(val == "fifth"){
            document.querySelector("#five").style.backgroundColor = "#" + color
        }

    }

    return(

        <>
        <div className="colorBox">

            <div id="one" onClick={()=>RandomColorGenerator("first")}></div>
            <div id="two" onClick={()=>RandomColorGenerator("second")}></div>
            <div id="three" onClick={()=>RandomColorGenerator("third")}></div>
            <div id="four" onClick={()=>RandomColorGenerator("fourth")}></div>
            <div id="five" onClick={()=>RandomColorGenerator("fifth")}></div>

        </div></>
    )
}