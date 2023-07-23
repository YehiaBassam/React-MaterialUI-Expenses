import { Box, Button, FormControl, Input, InputAdornment, InputLabel, styled } from '@mui/material'
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { blue } from '@mui/material/colors';

const Create = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[600]),
    backgroundColor: blue[600],
    '&:hover': {
      backgroundColor: blue[700],
    },
  }));

  return (
    <Box className='flex-center' >
      <Box component="form" sx={{ width: { xs: '50%', lg: '30%' } }}>
        <FormControl fullWidth sx={{ mt: 5 }} variant="standard">
          <InputLabel >Title</InputLabel>
          <Input/>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 5 }} variant="standard">
          <InputLabel >Amount</InputLabel>
          <Input
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <ColorButton sx={{mt: 5}} variant="contained" endIcon={<SendIcon />}>
          Submit
        </ColorButton>
      </Box>
    </Box>
  )
}

export default Create