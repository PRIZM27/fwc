import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';

// import SplitContainer from '../Layout Components/SplitBox/SplitBox';

// // image imports
// import womanSitting from '../../assets/images/woman_sitting_peacefully.jpg';
// import womanFacingLeft from '../../assets/images/jessica-felicio-1000.jpg';

// import bg from '../../assets/images/textured.png';
// import meditate from '../../assets/images/meditate.png';

import missionImage from '../../assets/images/people.webp';

const theme = createTheme({});

const Mission = () => {
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const largeScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid
      container
      direction={smallScreen ? 'column' : 'row'}
      justifyContent="space-between"
      rowGap="2rem"
      sx={{
        padding: '2rem',
        alignItems: smallScreen ? 'center' : 'auto',
        // [theme.breakpoints.down('md')]: {
        //   direction: 'column',
        //   width: '45rem',
        //   height: '100vh',
        // },
        // [theme.breakpoints.up('md')]: {
        //   direction:'row',
        //   width: '85vw',
        //   height: '100vh',
        // },
      }}
    >
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        rowGap="1rem"
        // maxWidth='50%'
        width={smallScreen ? '80%' : '50%'}
        order={smallScreen ? 1 : 2}
      >
        <Typography
          textAlign={'center'}
          variant="h2"
          fontSize={smallScreen ? '4.5rem' : '6rem'}
          color='secondary'
          // width={'100%'}
          // ml={'4rem'}
          // mb={'3rem'}
          // mt={'5rem'}
          sx={{
            textTransform: 'uppercase',
            overflow: 'hidden',
          }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          fontSize={smallScreen ? '1.4rem' : '1.8rem'}
          lineHeight={2}
          width="90%"
          // pl={'4rem'}
        >
          {`At Fortitude Wellness Collective, our mission is to provide
        culturally competent mental health therapy services to individuals
        from diverse backgrounds. We strive to create a safe and inclusive
        environment where individuals can feel heard and understood, and
        work towards achieving their mental wellness goals.

        \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
        </Typography>
      </Grid>

      <Box
        width={smallScreen ? '80%' : '50%'}
        m="0 auto"
        sx={{ borderRadius: '.5rem' }}
      >
        <img
          src={missionImage}
          alt="illustration of woman meditating with legs crossed and folded, looking peaceful"
          width="100%"
        />
      </Box>
    </Grid>
  );
};

export default Mission;

/* 

 <Grid 
          item 
          container 
          direction={'column'} 
          // maxWidth='50%'  
          maxWidth={smallScreen ? '100%' : '50%'}
          mt='3rem'
          order={smallScreen ? 1 : 2}
          >
        <Typography
          data-aos="zoom-in"
          textAlign={'left'}
          variant="h2"
          fontWeight={'600'}
          fontSize={smallScreen ? '5rem' : '8rem'}
          // width={'100%'}
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
            fontSize={largeScreen ? '1.4rem' : '2.2rem'}
            lineHeight={2}
            color="#000"
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
*/
