import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// import Profile from '../../components/Personell/Profile';

import GeneralizedProfile from './GeneralizedProfile';
import Services from '../Services/Services';


// import Ribbon from '../../components/Ribbon/Ribbon';
import GeneralizedRibbon from '../../Ribbon/GeneralizedRibbon';

// import StaffCard from '../../components/Cards/StaffCard/StaffCard';

import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';

import {services} from '../../../data/servicesData';


const theme = createTheme({});

const ServicesPage = () => {
  const [service, setService] = useState(0);
  const [page, setPage] = useState(1);

  const totalPages = services.length / 6;

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



  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChangeObject = (e, index) => {
    console.log(e.target);
    setService(index);
  };

  if (mobile) {
    return (
      <Services />
      // <Box
      //   className={'mobile__cards-container'}
      //   sx={{
      //     // width: '45rem',
      //     width: '100vw',
      //     // height: '100vh',
      //     padding: '7rem 3rem 8rem 3rem',
      //     // margin: '10rem auto 0 auto',
      //     // backgroundColor: '#FDC600',
      //    backgroundColor: '#FFFAED',
      //     display: 'flex',
      //     flexDirection: 'column',
      //     alignItems: 'center',
      //     rowGap: '3rem',
      //   }}
      // >
      //   <Typography 
      //     variant='h1' 
      //     fontWeight='600'
      //     color='secondary'
      //     sx={{
      //       fontSize: mobile ? '4.5rem' : '6rem',
      //       fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
            
      //     }}
      //   >
      //     Meet the Team
      //   </Typography>
      //   {services.map((s, i) => (
      //     <StaffCard key={i} person={s} />
      //   ))}
        
      // </Box>
    );
  }

  return ( 
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '75vh 25vh',
      // gridTemplateRows: '80vh 20vh',
      background: 'linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)',

      background: '-moz-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)',

      background: '-webkit-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)',

      filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#EBF4F5", endColorstr="#B5C6E0", GradientType=1 )',
    }}>
        {/* <Profile className={classes.person__box} person={staff[person]}/> */}
        <GeneralizedProfile sx={{
            gridColumn: '1 / -1',
            gridRow: '1 / -1',
            display: 'none',
       
        }} object={services[service]} />

      <GeneralizedRibbon
        object={services.slice((page - 1) * 6, (page) * 6)}
        onHandleChangeObject={handleChangeObject}
        onPrevPage={handlePageClickPrev}
        onNextPage={handlePageClickNext}
      />
    </Box>
  )

};

export default ServicesPage;
