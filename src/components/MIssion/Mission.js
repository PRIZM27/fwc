import { Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// package imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// image imports
import womanSitting from '../../assets/images/woman_sitting_peacefully.jpg';
import womanFacingLeft from '../../assets/images/jessica-felicio.jpg';

import { maxWidth } from '@mui/system';

const Mission = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Grid
      container
      className="mission"
      component="section"
      width="100%"
      sx={{
        marginTop: '-12rem',
        // paddingTop: '15rem',
        paddingBottom: '10rem',
        // background: '#312E2E',
        background: '#000',
        // clipPath:'polygon(0 10%, 100% 0, 100% 100%, 0 90%)'

      }}
    >
      
      <Grid 
        item 
        container 
        direction="row" 
        justifyContent={'space-between'} 
        pb={'5rem'}
        
      >
        <Grid 
        item width={'50%'} 
        height='700px' 
        data-aos="slide-right" 
        sx={{
          backgroundImage:`url(${womanFacingLeft})`,
          backgroundSize: 'cover',
          backgroundPositionY: '-40rem',
          backgroundRepeat:'no-repeat',

        }}>
          {/* <picture>
            <img
              src={womanSitting}
              alt="person on mountain top sitting with legs crossed, back turned to camera overlooking landscape"
              width={'100%'}
            />
          </picture> */}
        </Grid>

        <Grid item container direction={'column'} width='50%'  data-aos="slide-left">
        <Typography
        data-aos="zoom-in"
        textAlign={'left'}
        variant="h2"
        fontWeight={'600'}
        fontSize={'8rem'}
        width={'100%'}
        ml={'4rem'}
        mb={'3rem'}
        mt={'5rem'}
        color="secondary"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Our Mission
      </Typography>
          <Typography
            variant="body1"
            fontSize={'2rem'}
            lineHeight={2}
            color="#F6EBEA"
            pl={'4rem'}
          >
            At Fortitude Wellness Collective, our mission is to provide
            culturally competent mental health therapy services to individuals
            from diverse backgrounds. We strive to create a safe and inclusive
            environment where individuals can feel heard and understood, and
            work towards achieving their mental wellness goals. We are dedicated
            to providing comprehensive and compassionate mental health care.
            Together, we offer a wide range of evidence-based treatments and
            services to help individuals of all ages and backgrounds achieve
            optimal mental health and well-being. Our approach is to provide
            personalized care that meets the unique needs of each client. We
            offer a wide range of services, including individual, couples, and
            family therapy. We understand that seeking help for mental health
            concerns can be overwhelming, and we strive to create a welcoming
            and non-judgmental environment. We believe in empowering our
            patients to take an active role in their own healing and recovery.
            Our team is committed to ongoing professional development and
            staying up-to-date with the latest research and advancements in the
            field of mental health. Through evidence-based practices, we empower
            our clients to build resilience and fortitude in their lives."
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Mission;
