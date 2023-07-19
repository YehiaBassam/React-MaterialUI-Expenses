import React from 'react'
import { Typography, Button, IconButton } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Home = () => {
  return (
    <div>
      Home  
      <Typography color="primary.main" variant="h1">cascd</Typography>
      <Button variant="contained">Contained</Button>
      <IconButton >
        <AcUnitIcon />
        
      </IconButton>

      
    </div>
  )
}

export default Home