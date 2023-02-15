import { Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
// Card component
import ServicesViewCard from '../../Cards/ServicesViewCard';

// sass style classes
import classes from './_Services.module.scss';

// package imports
import AOS from 'aos';
import 'aos/dist/aos.css';


const services = [
  {
    name: 'One-on-One Psychotherapy',
    inPerson: 'true',
    anotherFeature: 'lorem ipsum',
    anotherFeature2: 'more lorem ipsum',
    description: '',
  },
  {
    name: 'Group Psychotherapy',
    inPerson: 'true',
    anotherFeature: 'lorem ipsum',
    anotherFeature2: 'more lorem ipsum',
  },
  {
    name: 'Supervision',
    inPerson: 'true',
    anotherFeature: 'lorem ipsum',
    anotherFeature2: 'more lorem ipsum',
  },
];

const servicesContent = services.map((service, i) => {
  return (
    <ServicesViewCard
      key={service.name}
      title={service.name}
      service={service}
      cardOrder={i}
    />
  );
});

const Services = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Grid
      className={classes.section__services}
      container
      component="section"
      width="100%"
      pb={'15rem'}
      justifyContent={'center'}
      // flexWrap={'wrap'}
      columnGap={'5%'}
      rowGap={'2rem'}
    >
      <Typography
        // data-aos="zoom-in"
        textAlign={'center'}
        variant="h2"
        fontWeight={'600'}
        fontSize={'8rem'}
        width={'100%'}
        mb={'3rem'}
        color="secondary"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Services
      </Typography>

      {servicesContent}
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
