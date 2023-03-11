import { useEffect, Fragment } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';

import HeadingPrimary from '../../Typography/HeadingPrimary';
import ButtonLarge from '../../Buttons/ButtonLarge';


import classes from './_Hero.module.scss';


import headerImage from '../../../assets/images/therapy-couch.png';

const theme = createTheme({});

/*
  <Typography
            data-aos="fade-right"
            variant="h1"
            fontSize={'8rem'}
            fontWeight={700}
            className={classes.hero__heading}
            sx={{
              color:'#252422', 
              [themePrimary.breakpoints.down('md')]:{
                fontSize: '5rem'
              }
            }}
          >
            Fortitude
           </Typography>
 */

const Hero = (props) => {
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fragment>
      <Grid
        className={classes.hero}
        container
        direction={mobile ? 'column' : 'row'}
        alignItems="center"
        justifyContent={mobile ? 'flex-start' : 'center'}
        // justifyContent={'space-between'}
        width={mobile ? '100vw' : '100vw'}
        height='100vh'
        rowGap={'2rem'}
        mt={!smallScreen ? '7rem' : 0}
        pt={mobile ? '3rem' : 0}
      >
        {/* <Box
          sx={{
            width: mobile ? '90%' : '50%',
            order: mobile ? 1 : 2,
          }}
        >
          <img
            className={classes.hero__image}
            src={headerImage}
            alt="illustration of a psychotherapy patient sitting on couch, engaging with therapists sitting to the right of couch"
            width="100%"
          />
        </Box> */}

        <Grid
          item
          container
          sx={{
            // border: '1px solid black',
            width: mobile ? '100%' : '90%',
            // display: mobile ? 'block' : 'auto',
            order: mobile ? 2 : 1,
            // height: '40%'
            flexDirection: mobile ? 'column' : 'row',
            rowGap: '3rem',
            alignItems: mobile ? 'center' : '',
          
            justifyContent: mobile ? 'start' : 'space-between',
            marginTop: mobile ? 0 : '5rem',
          }}
        >
          <Stack
            // direction={mobile ? 'column' : 'row'}
            sx={{
              width: mobile ? '100%' : '70%',
              alignItems:mobile ? 'center' : 'start',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                width: mobile ? 'auto' : '100%',
                lineHeight: 1.2,
                fontSize: mobile ? '5rem' : '12rem',
                fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
                color: '#FA8072',
                fontWeight: mobile ? 300 : 500,
                textAlign: 'left',
                // paddingLeft: '20%'
                overflow: 'hidden',
                span: { 
                  display: 'block',
                  overflow: 'hidden'
                }, 
                '.middle': { 
                  color: 'brown',
                }
              }}
            >
              <span>
                Fortitude
              </span> 
              <span className='middle'>
                Wellness
              </span>
              <span>
                Collective
              </span>
            </Typography>
          </Stack>
          <Stack
            direction="column"
            rowGap='2rem'
            alignItems={mobile ? 'center': 'flex-end'}
            width={mobile ? '70%' : '30%'}
            sx={{
            
            }}
          >
            <Stack direction='column' alignItems={mobile ? 'center' : 'flex-start'}>
              <Typography
                variant="body1"
                sx={{
                  width: mobile ? '70%': '70%',
                  fontSize: '1.8rem',
                  textAlign:mobile ? 'left' : 'auto',
                }}
              >
                A modern psychotherapy practice, committed to providing high
                quality care for everyone.
              </Typography>
              <ButtonLarge
              
                sx={{
                  marginTop: mobile ? '2rem' : '1rem',
                  textAlign:'center',
                  minWidth: mobile ? '50%' : 'auto',
                }}
              >
                Book Now
              </ButtonLarge>
            </Stack>
            
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Hero;
