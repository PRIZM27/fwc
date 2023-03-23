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

