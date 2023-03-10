import { Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';
// Card component
import ServicesViewCard from '../../Cards/ServicesViewCard';

// sass style classes
import classes from './_Services.module.scss';

import oneOnOneImage from '../../../assets/images/looking-up-final.png';
import groupTherapyImage from '../../../assets/images/two-women-removebg-preview.png';
import supervisionImage from '../../../assets/images/supervision.webp';

const services = [
  {
    name: 'Individual Therapy',
    description: `Individual therapy involves one-on-one sessions between a trained therapist and a patient. The goal of individual therapy is to help the patient understand and work through their emotions, thoughts, and behaviors in order to improve their mental health and overall well-being. Individual therapy can be used to treat a wide range of mental health issues, including anxiety, depression, post-traumatic stress disorder (PTSD), and addiction. It can also be used to help individuals cope with life changes and transitions, such as the loss of a loved one, a career change, or a major move.`,
    price: 180,
    duration: 53,
    inPerson: 'true',
    anotherFeature: 'lorem ipsum',
    anotherFeature2: 'more lorem ipsum',
    image: oneOnOneImage,
  },
  {
    name: 'Couples/Family Therapy',
    description: `Couples/ Family therapy is a type of psychotherapy that involves couples or all members of a nuclear or extended family. Couples therapy is designed to help couples improve their relationship by resolving conflicts and addressing issues such as communication problems, intimacy issues, and financial disagreements.The goal of family therapy is to help family members improve communication, resolve conflicts, and understand each other's perspectives. Therapy sessions are led by a trained therapist and may involve a variety of techniques, such as role-playing and problem-solving exercises. Family therapy can be used to address a wide range of issues, including mental health disorders, relationship problems, and behavioral issues in children. Couples therapy can be used for couples of all types, regardless of whether they are dating, engaged, married, or in a long-term committed relationship.`,
    price: 200,
    duration: 60,
    inPerson: 'true',
    anotherFeature: 'lorem ipsum',
    anotherFeature2: 'more lorem ipsum',
    image: groupTherapyImage,

  },
  {
    name: 'Wellness Coaching',
    description: `Wellness coaching is a holistic approach to health and wellness that focuses on the individual's unique needs, goals, and experiences. It involves working with a coach to identify areas of concern and create a personalized plan to improve physical, emotional, and mental well-being. A wellness coach provides support, guidance, and accountability to help individuals make lasting lifestyle changes and reach their health and wellness goals. This can include a range of topics such as nutrition, exercise, stress management, and work-life balance. Wellness coaching differs from traditional therapy or medical treatment, as the focus is on prevention and proactive measures for overall well-being rather than addressing specific medical conditions.`,
    price: 85,
    duration: 53,
    inPerson: 'true',
    anotherFeature: 'lorem ipsum',
    anotherFeature2: 'more lorem ipsum',
    image: supervisionImage,
  },
];

const servicesContent = services.map((service, i) => {
  return (
    <ServicesViewCard
      key={i}
      title={service.name}
      service={service}
      cardOrder={i}
    />
  );
});

const Services = () => {

  return (
    <Grid
      className={classes.section__services}
      container
      direction='row'
      component="section"
      width='100vw'
      height='100vh'
      pt='4rem'
      pb='4rem'
      justifyContent={'center'}
      // flexWrap={'wrap'}
      columnGap={'5%'}
      rowGap='3rem'
    >
      <Typography
        // data-aos="zoom-in"
        textAlign={'center'}
        variant="h2"
        fontSize='6rem'
        fontWeight={400}
        color='secondary'
        width={'100%'}
        // mb={'3rem'}
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
