import { useEffect, Fragment } from 'react';

import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import classes from './_Hero.module.scss';

// package imports 
import AOS from 'aos';
import "aos/dist/aos.css";


// images 
import celestialWoman from '../../../assets/images/celestial-woman.png'


const revealSection = (entries, observer) => { 
  const [entry] = entries;

  console.log(entry, 'entry')
  console.log(entries, entries);
  
  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);

}


const Hero = (props) => { 

  useEffect(() => { 
    AOS.init();
    AOS.refresh();
  },[]);

return (
  <Fragment>
    <Grid 
    direction='row'
    justifyContent={'flex-start'}
    className={classes["hero__content-container"]} 
    >
    <Stack direction='column' mr='20%'>
        <Typography
        data-aos='fade-right' 
        variant="h1"
        sx={{color: '#252422'}}
        fontSize={'8rem'}
        fontWeight={700}
        className={classes.hero__heading}>
        Fortitude 
        </Typography>
        <Typography  
        data-aos='fade-left' 
        variant='h1' 
        sx={{color: '#252422'}}
        fontSize={'8rem'}
        fontWeight={700}

        className={classes.hero__heading}>
          Wellness
        </Typography>
        <Typography  
        data-aos='fade-right' 
        variant='h1' 
        sx={{color: '#252422'}}
        fontSize={'8rem'}
        fontWeight={700}
        className={classes.hero__heading}>
          Collective
        </Typography>
      </Stack>
      <Grid item width='55%' sx={{
        // backgroundImage: `url(${celestialWoman})`,
        // backgroundSize:'cover',
      }}>

      </Grid>
    </Grid>

  </Fragment>
  
  )
}

export default Hero;

