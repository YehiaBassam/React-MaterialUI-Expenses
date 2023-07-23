import React from 'react'
import { Typography, IconButton, Paper, Box, Grid } from '@mui/material';
import { Close } from '@mui/icons-material';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box>
          <Paper elevation={3} >
            <Box sx={{ textAlign: 'right' }}>
              <IconButton size='medium'>
                <Close fontSize="small"/>
              </IconButton>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 15px 10px 15px'}}>
              <Typography variant="body1" color="initial"> GYM </Typography>
              <Typography variant="body1" color="initial" sx={{ opacity: .7}}> 100 $ </Typography>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Home