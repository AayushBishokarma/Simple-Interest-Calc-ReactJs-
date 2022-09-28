import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import './index.css';

const App =()=>{
  const[p,setP]=useState(0)
  const[t,setT]=useState(0)
  const[r,setR]=useState(0)
  const[si,setSi]=useState(0)

  const calcInterest=()=>{
    setSi( p*t*r/100)
    
  }


  return (
    <div >

      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest Calculator
          </Typography>

        </Toolbar>
      </AppBar>
      <br />

      <TextField onChange={(event)=>setP(event.target.value)} id="filled-basic" label="Enter the Principal(P):" variant="filled" />
      <br/><br/><br/>
      <TextField onChange={(event)=>setT(event.target.value)} id="filled-basic" label="Enter the Time(T):" variant="filled" />
      <br/><br/><br/>
      <TextField onChange={(event)=>setR(event.target.value)} id="filled-basic" label="Enter the Rate(R):" variant="filled" />
      <br/><br/><br/>
      <Button onClick={() => calcInterest()}  variant="contained">Calculate</Button>
      <br/><br/><br/>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Result: {si}
          </Typography>

        </Toolbar>
      </AppBar>
    </div>



  );
}

export default App;
