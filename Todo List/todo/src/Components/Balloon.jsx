import { useState } from "react";
import { useEffect } from "react";



export const Balloon = () => {

    const [color , setColor] = useState([]);


    // ------------------- For generating Random Colors ----------------------------------------->


    const RandomColor = () => {
        
        var color = "#" + Math.floor(Math.random()*16777215).toString(16);
        return color;
    }



    // --------------------- Random Colors Arrray ------------------------------------------------>


    const RandomColorArray = () => {

        var colorArr = Array(5)
        .fill()
        .map( ( _,index) => ({ id : index , color : RandomColor()}))
        setColor([...colorArr])
    }

    useEffect(() => {RandomColorArray()},[])

    return(
        <>

        <h1>BALLOON GAME</h1>

        <div className="mainDiv">
            <div className="left"></div>
            <div className="right">
                {color.map((el)=>(
                    <div style={{backgroundColor : el.color}} key={el.id} >
                    </div>
                ))}
            </div>
            <div className="input">
                <input type="text" id="ballonnumber" placeholder="Enter Your Ballon Number"  /> <br />
                <button>Shoot</button>
            </div>
        </div>

          

        </>
    )
}