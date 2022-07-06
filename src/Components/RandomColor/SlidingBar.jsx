

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



export function SlidingBar() {

    function valuetext(value) {
        return `${value}`;
    }

    const HandleChange = (val) => {

        if(val == 10){
            document.getElementById("rainbow").style.backgroundColor = "red"
        }
        else if(val == 20){
            document.getElementById("rainbow").style.backgroundColor = "orange"
        }
        else if(val == 30){
            document.getElementById("rainbow").style.backgroundColor = "yellow"
        }
        else if(val == 40){
            document.getElementById("rainbow").style.backgroundColor = "cyan"
        }
        else if(val == 50){
            document.getElementById("rainbow").style.backgroundColor = "green"
        }
        else if(val == 60){
            document.getElementById("rainbow").style.backgroundColor = "blue"
        }
        else if(val == 70){
            document.getElementById("rainbow").style.backgroundColor = "teal"
        }
        else if(val == 80){
            document.getElementById("rainbow").style.backgroundColor = "tomato"
        }
        else if(val == 90){        
            document.getElementById("rainbow").style.backgroundColor = "purple"
        }
        else if(val == 100){
            document.getElementById("rainbow").style.backgroundColor = "pink"
        }
        else if(val == 110){
            document.getElementById("rainbow").style.backgroundColor = "black"
        }
        

    }

   
  return (

    <>

    <div className="colorBox">

        <div id='rainbow'></div>

        <div id="slider">
            <Box sx={{ width: 300 }}>

                <Slider
                aria-label="Temperature"
                defaultValue={10}
                onChange={(e) => HandleChange(e.target.value)}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110} />
      
            </Box>
        </div>

    </div>

    </>
   
  );
}
