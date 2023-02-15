import {Fragment} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';



const Portfolio = () => { 
  return (
    <Box 
      className="services" 
      component='section' 
      sx={{ marginTop: '-10rem', paddingTop:'15rem'}}>
      <Grid container spacing={2} justifyContent="center">
      <Typography 
        variant='h2' 
        fontSize={'6rem'} 
        mb={'3rem'}>
          Portfolio
      </Typography>
      </Grid>
    </Box>
  )
}

export default Portfolio;