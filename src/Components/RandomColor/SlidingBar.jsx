

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



export function SlidingBar() {

    function valuetext(value) {
        return `${value}`;
    }

    const HandleChange = (val) => {

        if(val == 10){
            document.getElementsById("rainbow").style.backgroundColor = "red"
        }
        console.log(val)
    }

    const Colors = ["red" , "orange" , "yellow" , "pink" , "blue" , "voilet" , "purple" ,"cyan" , "green" , "black"]

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
