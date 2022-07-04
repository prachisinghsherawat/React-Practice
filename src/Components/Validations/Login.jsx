
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function Login() {

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
      <TextField id="name" label="Name" variant="outlined" />
      <TextField id="email" label="Email" variant="outlined" />
      <TextField id="password" label="Password" variant="outlined" />

    
      <Stack spacing={2} direction="row">
        <Button variant="contained">SUBMIT HERE</Button>
      </Stack>


      
    </Box>
    </div>

    </>
  );
}
