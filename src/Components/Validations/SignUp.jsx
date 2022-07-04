
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function SignUp() {

  const [signup, setSignup] = React.useState({

    name : "",
    email : "",
    password : ""

  })

  const [errors , setErrors] = useState({})
  const [submitData , setSubmitData] = useState([])


  const HandleChange = (e) =>{
      
    const {id,value} = e.target;
    setSignup({...signup , [id]:value})
  }

  const HandleSubmit = () => {

    setErrors(Valid(signup))
    setSubmitData([...submitData , signup])
  }

  const Valid = (val) => {

    const err = {}

    if(!val.name){
      err.name = "name is required"
    }
    if(!val.email){
      err.email = "email is required"
    }
    if(!val.password){
      err.password = "password is required"
    }
    return err
  }
  

  return (

    <>

    <div className="todo">

    <h1>Sign Up</h1>

    <Box id=''
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name" label="Name" variant="outlined" onChange={HandleChange} />
      <TextField id="email" label="Email" variant="outlined" onChange={HandleChange} />
      <TextField id="password" label="Password" variant="outlined" onChange={HandleChange} />

    
      <Stack spacing={2} direction="row">
        <Button variant="contained">SUBMIT HERE</Button>
      </Stack>


      
    </Box>
    </div>

    </>
  );
}
