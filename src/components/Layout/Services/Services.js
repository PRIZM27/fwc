import { Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// Card component
import ServicesViewCard from '../../Cards/ServicesViewCard';
import FAQCard from '../../Cards/FAQCard/FAQCard';
import { FeatureBoxSet } from '../Features/Feature';

// sass style classes
import classes from './_Services.module.scss';

// import oneOnOneImage from '../../../assets/images/looking-up-final.png';
// import groupTherapyImage from '../../../assets/images/two-women-removebg-preview.png';
// import supervisionImage from '../../../assets/images/supervision.webp';

import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';// import { Phone } from '@mui/icons-material';


import useMediaQ from '../../../utils/custom-hooks/useMediaQ';

import {services} from '../../../data/servicesData';

import { createTheme } from '@mui/system';

const theme = createTheme();
console.log(theme, 'theme object from Services.js')


const features = [
  {
    icon: <PhonelinkOutlinedIcon 
    className={classes['highlights__svg-icon']}
    fontSize='8rem'
    sx={
      { 
        color: '#000', 
        display: 'block' 
        
      }} />,
    feature: 'Remote sessions',
    details: 'Lorem ipsum',
  },
  {
    icon: <HealthAndSafetyOutlinedIcon 
    className={classes['highlights__svg-icon']}
    fontSize='8rem'
    sx={
      { 
      color: '#000', 
      display: 'block' 
      }} />,
    feature: 'Carefirst-Blue Cross Blue Shield Provider',
    details: 'Lorem ipsum',
  },
  {
    icon: (
      <AssignmentOutlinedIcon 
      className={classes['highlights__svg-icon']}
      fontSize='8rem'
      sx={{ 
        color: '#000', 
        display: 'block', 
      }} />
    ),
    feature: 'Lorem ispm procelti nuouti',
    details: 'Lorem ipsum',
  },
];

const servicesContent = services.map((service, i) => {
  return (
    <ServicesViewCard
      key={i}
      title={service.name}
      price={service.price}
      service={service}
      cardOrder={i}
      
    />
  );
});

const mobileServicesContent = services.slice(0, 4).map((service, i) => {
  return (
    <ServicesViewCard
      key={i}
      title={service.name}
      price={service.price}
      service={service}
      cardOrder={i}
      
    />
  );
});

// const featuresContent =  features.map(f => <FeatureBoxSet feature={f} key={f.details}/>
// );
// const featureContent = features.map((f, i) => (
//   <FeatureBoxSet feature={f} key={`${f.feature}${f.i}`} />
// ));

const featuresContent = features.map((f, i) => (
  <Stack
    key={`${f}${i}`}
    height={theme.breakpoints.down('md') ? '15rem' : '25rem'}
    alignItems="center"
    rowGap='2rem'
    sx={{
      backgroundColor: 'transparent',
    }}
  >
    {f.icon}
    <Typography 
    variant="h4"  
    fontSize={theme.breakpoints.down('md') ? '1.2rem' : '3rem'} 
    fontWeight="600" 
    color='#000' 
    width='70%' 
    textAlign={'center'}>
      {f.feature}
    </Typography>
  </Stack>
));

const Services = () => {

  // const mediumScreenAndBelow = useMediaQuery(theme.breakpoints.down('md'));
  const mobile = useMediaQ('down', 'md');

  return (
    <Grid
      className={classes.section__services}
      container
      direction="column"
      alignItems="center"
      component="section"
      rowGap="2.5rem"
      width="100vw"
      height={'auto'}
      pt="4rem"
      pb="4rem"
      // justifyContent={'center'}
      // flexWrap={'wrap'}
      columnGap={'5%'}
      // rowGap="3rem"
    >
      {/* <Typography
        // data-aos="zoom-in"
        textAlign={'center'}
        variant="h"
        fontSize={mediumScreenAndBelow ? '5rem' : '10rem'}
        fontWeight={400}
        width={'100%'}
        // color='secondary'
        // mb={'3rem'}
        sx={{
          textTransform: 'uppercase',
          // color: '#FFFAED'
          color: '#000',
          fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',

        }}
      >
        Services
      </Typography> */}
      <Stack
        width={mobile ? '90%' : '50%'}
        // direction={mediumScreenAndBelow ? 'column' : 'row'}
        direction='row'
        justifyContent={'center'}
        columnGap="1.5rem"
      >

        {featuresContent}

      </Stack>
      <Stack 
        direction={'row'}
        justifyContent='space-evenly'
        flexWrap='wrap' 
        width="100%" 
        columnGap="1.5rem"
        // overflow='visible'
      >
      {mobileServicesContent}

      </Stack>

      
    </Grid>
  );
};

export default Services;

{
  /* <Grid item container  justifyContent={'center'} sx={{width: '70vw', margin: '0 auto'}} >
          <Grid 
            item 
            container 
            display={'grid'} 
            sx={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: '4rem 1fr',
            }}>
            <Typography 
            variant='h3' 
            fontSize={'4rem'} 
            sx={{gridColumn: '1/-1', textAlign:'center'}}
          >
              Clipper Cuts
              </Typography>
          <img width='250px' height='250px' src={clippers} alt='illustrated barber clippers svg graphic' />
          <Typography variant='body1' component='p' fontSize='1.8rem'  sx={{paddingTop: '6rem', paddingLeft: '5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit amet massa vitae tortor. Euismod nisi porta lorem mollis aliquam. Felis eget nunc lobortis mattis aliquam faucibus.
          </Typography>
          </Grid>
      
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item container justifyContent={'center'}  >
        <Typography variant='body1' component='p' fontSize='20px'  sx={{width: '50%', paddingTop: '6rem', paddingLeft: '5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit amet massa vitae tortor. Euismod nisi porta lorem mollis aliquam. Felis eget nunc lobortis mattis aliquam faucibus.
          </Typography>
          <img width='250px' height='250px' src={combScissors} alt='illustrated barber clippers graphic' />
         
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item container justifyContent={'center'}  >
          <img width='250px' height='250px' src={blowdryer} alt='illustrated barber clippers graphic' />
          <Typography variant='body1' component='p' fontSize='20px'  sx={{width: '50%', paddingTop: '6rem', paddingLeft: '5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit amet massa vitae tortor. Euismod nisi porta lorem mollis aliquam. Felis eget nunc lobortis mattis aliquam faucibus.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item container justifyContent={'center'}  >
        <Typography variant='body1' component='p' fontSize='20px'  sx={{width: '50%', paddingTop: '6rem', paddingLeft: '5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit amet massa vitae tortor. Euismod nisi porta lorem mollis aliquam. Felis eget nunc lobortis mattis aliquam faucibus.
          </Typography>
          <img width='250px' height='250px' src={blade} alt='illustrated barber clippers graphic' />
          
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item container justifyContent={'center'}  >
          <img width='250px' height='250px' src={barberChair} alt='illustrated barber clippers graphic' />
          <Typography variant='body1' component='p' fontSize='20px'  sx={{width: '50%', paddingTop: '6rem', paddingLeft: '5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit amet massa vitae tortor. Euismod nisi porta lorem mollis aliquam. Felis eget nunc lobortis mattis aliquam faucibus.
          </Typography>
        </Grid> */
}

// Old Table
{
  /* <TableContainer component={Paper}>
<Table
  size="small"
  sx={{
    maxWidth: '800px',
    margin: '0 auto',
    border: '1px solid',
  }}
  aria-label="simple table"
>
  <TableHead>
    <TableRow
      sx={{
        '&.MuiTableRow-head': {
          background:
            'linear-gradient(90deg, hsla(208, 7%, 55%, 1) 0%, hsla(191, 5%, 40%, 1) 100%)',
        },
      }}
    >
      <TableCell sx={{ fontSize: '2rem' }}>Style</TableCell>
      <TableCell sx={{ fontSize: '2rem', textAlign: 'right' }}>
        Price
      </TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => {
      return (
        <TableRow
          key={row.name}
          sx={{
            '&:last-child td, &:last-child th': { border: 0 },
            '&.MuiTableRow-root': {},
            '& .MuiTableCell-root': {
              fontSize: '2rem',
              fontWeight: 'bold',
              fontFamily: 'Bungee Hairline',
              '&:hover > th': { color: 'blue' },
            },

            '&:nth-of-type(odd)': {
              backgroundColor: (theme) => theme.palette.action.hover,
            },
          }}
        >
          <TableCell component="th" scope="row" sx={{}}>
            {row.name}
          </TableCell>
          <TableCell component="th" scope="row" align="right">
            {row.price}
          </TableCell>
        </TableRow>
      );
    })}
  </TableBody>
</Table>
</TableContainer> */
}
