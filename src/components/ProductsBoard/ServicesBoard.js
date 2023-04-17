import { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { Link, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';


import { services } from '../../data/servicesData';
import { FeatureBoxSet } from '../Layout/Features/Feature';

import oneOnOneImage from '../../assets/images/looking-up-final.png';
import groupTherapyImage from '../../assets/images/two-women-removebg-preview.png';
import supervisionImage from '../../assets/images/supervision.webp';

const FeatureBox = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  borderRadius: '.5rem',
  rowGap: '1rem',
  padding: '1rem',
  [theme.breakpoints.up('md')]: {
    height: '30rem',
  },
}));

const ServiceFeatureBoxSet = (props) => { 
  const {service} = props;

  return ( 
    <FeatureBox direction="column" onMouseOver={props.onMouseOver} {...props} >
    <Stack direction="column" alignItems="center" columnGap="2rem">
      <img src={service.image} alt='need alt text' width='50%' /> 
      <Typography fontSize="1.8rem" fontWeight="600" textAlign={'center'}>
        {service.name}
      </Typography>
    </Stack>
    <Typography sx={{
      fontSize: '3rem',
      fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
      textAlign:'center'
        }}>{`$${service.price} / hr`}
        </Typography>
    <Typography fontSize="1.2rem">{service.overview}</Typography>
  </FeatureBox>
  )
}



 // how to create carousel for services/products offered
    // 1. Take the full list and cut it down to 4 items at a time; render these 4
    // 2. When user clicks the prev arrow or next arrow, grab the prev/next 4 products in the sequence
    //  // a) account for the beginning and end of the array (disable respective arrow if no prev or next available or recycle carousel)
    ;




const Board = styled(Box)(({ theme }) => ({
 backgroundColor: '#fff',
 borderRadius: '.8rem',
  margin: '10rem auto',

 display: 'grid',
 gridTemplateColumns: 'repeat(12, minmax(0,1fr))',
}));

const ProductRangeGrid = styled(Grid)(({ theme }) => ({
  gridColumn: 'span 6 / span 6',
  display: 'grid',
  gap: '1rem',
  gridAutoRows: '1fr',
  gridTemplateColumns: '1fr 1fr',
  gridAutoFlow: 'row',
  padding: '1rem'
 }));

const ProductBox = (props) => { 
  return ( 
    <Paper component='section' sx={{display: 'flex', flexDirection: 'column', rowGap: '1.5rem', height: '20rem'  }}>
      <Link href='#'>
        <Box component='div'>
          <img src='service image' alt='alt text' />
        </Box>
        <Typography variant='body1' fontSize='1.4rem'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Stack>
          <Box>
            <span>Service Name</span>
          </Box>
        </Stack>
      </Link>
    </Paper>
  )
}

const ProductShowcase = (props) => { 
  return ( 
    <Grid sx={{
      gridColumn: 'span 6 / span 6',
      display: 'grid',
      gridTemplateColumns: 'repeat(6,minmax(0,1fr))',
      backgroundColor: 'salmon',
    }}>

      <Box sx={{
        gridColumn: '1 / -1',
      }}>
        {props.children}
      </Box>

    </Grid>
  )
} 


const ServicesBoard = (props) => { 
  const [serviceToShow, setServiceToShow] = useState(<Typography variant='h3' color='white'>Individual Therapy</Typography>);
  const [currentIndex, setCurrentIndex] = useState();

  // The set number of items to display, based on page number e.g. 4 products per page
  const newServices = services.slice((props.page - 1) * 4, (props.page) * 4);

  const handleServiceHover = (e) => { 
    setCurrentIndex(e.target.id)

  };

  const handleServiceClick = (e) => { 
    setServiceToShow(<Typography variant='h3' color='white'>{e.target.innerText}</Typography>)

  }

  const handleMouseOut = (e) => { 
    setCurrentIndex(null)
  } 

 

  return ( 
    <Board {...props}>
      <ProductRangeGrid>
        {newServices.map((s,i) => (
          <ServiceFeatureBoxSet 
          id={i}
          service={s} 
          key={s.name} 
          onClick={handleServiceClick}
          onMouseOver={handleServiceHover} 
          onMouseOut={handleMouseOut}
          elevation={currentIndex === `${i}` ? 5 : 0}  
          sx={{
            border: '1px solid black',
            cursor: 'pointer',
          }}
          />
        ))}
      </ProductRangeGrid>
      <ProductShowcase>
        {serviceToShow}
      </ProductShowcase>
    </Board>
  )
}

export default ServicesBoard;