import { Fragment, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { styled } from '@mui/material/styles';
// Card component
import ServicesViewCard from '../../Cards/ServicesViewCard';

// sass style classes
import classes from './ServicesPage.module.scss';

import { services } from '../../../data/servicesData';

import ServicesBoard from '../../ProductsBoard/ServicesBoard';

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

const ServicesPage = () => {
  const [page, setPage] = useState(1);

  // amount of pages: array.length / 4
  // b/c we want only 4 svcs per page shown
  // console.log(services.length / 4);
  const totalPages = services.length / 4;

//   const handlePageClick = (e) => {
//     console.log(e.target.id)
//     console.log(page)
//     // if user on first page and clicks prev button, cycle to the last page

//     if (page === 1 && e.target.id === 'prev') {
//       setPage(totalPages);
//       return;
//     }

//     // if there is a previous page e.g. 2 / 3
//       // what constitutes previous page?
//         // if the current page is not equal to 1
//     if (page !== 1 && e.target.id === 'prev') {
//       // decrement the page number by 1
//       // setPage((prevPage) => prevPage - 1);
//         setPage(page - 1);
//     }

//     // last page and no more pages after
//     if (page === totalPages && e.target.id === 'next') {
//       setPage(1);
//       return;
//     }
    
//     if(page < totalPages && e.target.id === 'next') { 
//       setPage((prevPage) => prevPage + 1);
//     }
// }

  

  const handlePageClickPrev = (e) => {
    console.log(page, 'current page');
    console.log(totalPages, 'total pages');

    // if user on first page and clicks prev button, cycle to the last page
    if (page === 1) {
      setPage(totalPages);
      return;
    }

    // if there is a previous page e.g. 2 / 3
    // what constitutes previous page?
    // if the current page is not equal to 1
    if (page !== 1) {
      // decrement the page number by 1
      setPage((prevPage) => prevPage - 1);
    }

    // const slicedServices = services.slice(page - 1, (page * 4));
  };

  const handlePageClickNext = (e) => {
    console.log('Next button clicked');

    // last page and no more pages after
    if (page === totalPages) {
      setPage(1);
      return;
    }
    // default case
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box sx ={{
      display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'minMax(200px, 400px) 6rem 1fr',
    }}>
      <Paper sx={{
        gridColumn: '2 / 10',
        gridRow: '1',
        paddingLeft: '2rem'
      }}>
        <Typography 
        variant='h1' 
        
        color='secondary'
        sx={{
          fontSize: '5vw',
        }}>
          Services
        </Typography>
        <Typography
        variant='body1'
        fontSize='1.6em'
        sx={{
          width: '40%'
        }}
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
        </Typography>
      </Paper>
      <Box
        sx={{
          gridRow: '2',
          gridColumn: '6 / span 1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '1px solid black',
          marginTop: '2rem'
          // mt: '15rem',
        }}
      >
        <Stack direction="row">
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClickCapture={handlePageClickPrev}
          >
            <ArrowBackIosIcon id='prev' />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClickCapture={handlePageClickNext}
          >
            <ArrowForwardIosIcon id='next'/>
          </IconButton>
        </Stack>
        <Typography variant="body1">{`Page ${page} / ${totalPages}`}</Typography>
      </Box>
      <ServicesBoard page={page}   sx={{
        gridColumn: '1 / -1',
        gridRow: '3',
        width: '90%',

      }} />
    </Box>
  );
};

export default ServicesPage;

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
