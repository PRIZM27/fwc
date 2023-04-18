import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';
import styles from './Section.module.scss'

const theme = createTheme({});


// Notes on how  to use this component

/* 
1) Section content is an object passed via "content" props attribute
2) Switch the order of the containers for content and the image to reverse the positions of the two (for alternating aesthetic) *must build code to implement this effect *
  // Probably need a "left" and "right" value for "position" props to add respective class for orientation
*/

//To-do: need details on proper image size

const Section = ({content, arrangement}) => {
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const largeScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid
      className={styles['section']}
      component='section'
      // className={styles['section__new-mission']}
      // container
      // direction={mobile ? 'column' : 'row'}
      // justifyContent="space-between"
      // rowGap="2rem"
      sx={{
        padding: '2rem',
        alignItems: mobile ? 'center' : 'auto',
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
        className={styles[`section__content-container--${arrangement}`]}
        component={Paper}
        item
        container
        direction="column"
        alignItems="center"
        rowGap="1rem"
        // maxWidth='50%'
        // width={mobile ? '80%' : '50%'}
        order={mobile ? 1 : 2}
      >
        <Typography
          textAlign={'center'}
          variant="h2"
          fontSize={mobile ? '4.5rem' : '6rem'}
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
          {content.heading}
        </Typography>
        <Typography
          title={content.title}
          variant="body1"
          fontSize={mobile ? '1.4rem' : '1.8rem'}
          lineHeight={2}
          width="90%"
          // pl={'4rem'}
        >
          {content.body}
        </Typography>
      </Grid>

      <Box
        className={styles[`section__image-container--${arrangement}`]}
        // width={mobile ? '80%' : '50%'}
        m="0 auto"
        sx={{ borderRadius: '.5rem' }}
      >
        <Box
          component={'img'}
          src={content.image}
          alt={content.imageAlt}
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

export default Section;

