import { useState } from "react";
import { useEffect } from "react";



export const Balloon = () => {

    const [balloon , setBalloon] = useState([])
    const [num , setNum] = useState(null)
    const [box , setBox] = useState([])

    useEffect(() => {RandomColorArray()},[])



    // ------------------- For Generating Random Colors ----------------------------------------->


    const RandomColor = () => {
        
        var color = "#" + Math.floor(Math.random()*16777215).toString(16);
        return color;
    }



    // --------------------- Random Colors Arrray ------------------------------------------------>


    const RandomColorArray = () => {

        var colorArr = Array(5)
        .fill()
        .map( ( _,i) => ({ id : i , color : RandomColor()}))
        setBalloon([...colorArr])
    }

    const ShootBalloon = (index) => {

        let newArr = balloon

        if(index == null){
            return
        }

        let removed = newArr.splice((index-1) , 1)
        box.push(...removed)
        setBalloon([...balloon])
    }



    return(

        <>

        <h1>BALLOON GAME</h1>

        <div className="mainDiv">

            <div className="left">
                {box.map((el) => (
                    <div style={{backgroundColor : el.color}} key={el.id}>

                    </div>
                ))}
            </div>


            <div className="right">
                {balloon.map((el)=>(
                    <div style={{backgroundColor : el.color}} key={el.id} >
                    </div>
                ))}
            </div>



            <div className="input">
                <input type="text" id="ballonnumber" placeholder="Enter Your Ballon Number" onChange={(e)=>setNum(e.target.value)} /> <br />
                <button onClick={() => ShootBalloon(num)} > Shoot </button>
            </div>



        </div>

          

        </>
    )
}