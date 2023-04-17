import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';

import styles from './NewMission.module.scss'


import missionSectionImage from '../../assets/images/people.webp';
import dei from '../../assets/images/dei.webp'


const theme = createTheme({});

const NewMission = () => {
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const largeScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid
      className={styles['section__new-mission']}
      component='section'
      // className={styles['section__new-mission']}
      // container
      // direction={smallScreen ? 'column' : 'row'}
      // justifyContent="space-between"
      // rowGap="2rem"
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
        className={styles['section__content-container']}
        component={Paper}
        item
        container
        direction="column"
        alignItems="center"
        rowGap="1rem"
        // maxWidth='50%'
        // width={smallScreen ? '80%' : '50%'}
        order={smallScreen ? 1 : 2}
      >
        <Typography
          textAlign={'center'}
          variant="h2"
          fontSize={smallScreen ? '4.5rem' : '6rem'}
          fontWeight='100'
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
          Mission
        </Typography>
        <Typography
          title='mission statement'
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
        className={styles['section__image-container']}
        // width={smallScreen ? '80%' : '50%'}
        m="0 auto"
        sx={{ borderRadius: '.5rem' }}
      >
        <Box
          component={'img'}
          src={dei}
          alt="collage of photos showing the faces of people of various ethnic backgrounds"
          width="100%"
          sx={{
            objectFit: 'cover',
          }}
          >
        </Box>
      </Box>
    </Grid>
  );
};

export default NewMission;

