import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';
import Section from '../../Section/Section';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';

import styles from './NewServices.module.scss'


// import missionSectionImage from '../../../assets/images/people.webp';
// import missionSectionImage from '../../../assets/images/people.webp';

import dei from '../../../assets/images/dei.webp';
import services from '../../../assets/images/services.webp';


const theme = createTheme({});

const servicesSectionContent = { 
  heading: 'Services',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: services,
  imageAlt: 'Illustration of pencil with green background',
  title: '',
}



const ServicesSection = () => {
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const largeScreen = useMediaQuery(theme.breakpoints.down('lg'));

  // return (
  //   <Grid
  //     className={styles['section__new-mission']}
  //     component='section'
  //     // className={styles['section__new-mission']}
  //     // container
  //     // direction={smallScreen ? 'column' : 'row'}
  //     // justifyContent="space-between"
  //     // rowGap="2rem"
  //     sx={{
  //       padding: '2rem',
  //       alignItems: smallScreen ? 'center' : 'auto',
  //       // [theme.breakpoints.down('md')]: {
  //       //   direction: 'column',
  //       //   width: '45rem',
  //       //   height: '100vh',
  //       // },
  //       // [theme.breakpoints.up('md')]: {
  //       //   direction:'row',
  //       //   width: '85vw',
  //       //   height: '100vh',
  //       // },
  //     }}
  //   >
  //     <Grid
  //       className={styles['section__content-container']}
  //       component={Paper}
  //       item
  //       container
  //       direction="column"
  //       alignItems="center"
  //       rowGap="1rem"
  //       // maxWidth='50%'
  //       // width={smallScreen ? '80%' : '50%'}
  //       order={smallScreen ? 1 : 2}
  //     >
  //       <Typography
  //         textAlign={'center'}
  //         variant="h2"
  //         fontSize={smallScreen ? '4.5rem' : '6rem'}
  //         fontWeight='100'
  //         color='secondary'
  //         // width={'100%'}
  //         // ml={'4rem'}
  //         // mb={'3rem'}
  //         // mt={'5rem'}
  //         sx={{
  //           textTransform: 'uppercase',
  //           overflow: 'hidden',
  //         }}
  //       >
  //         Services
  //       </Typography>
  //       <Typography
  //         title='mission statement'
  //         variant="body1"
  //         fontSize={smallScreen ? '1.4rem' : '1.8rem'}
  //         lineHeight={2}
  //         width="90%"
  //         // pl={'4rem'}
  //       >
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //       </Typography>
  //     </Grid>

  //     <Box
  //       className={styles['section__image-container']}
  //       // width={smallScreen ? '80%' : '50%'}
  //       m="0 auto"
  //       sx={{ borderRadius: '.5rem' }}
  //     >
  //       <Box
  //         component={'img'}
  //         src={services}
  //         alt="collage of photos showing the faces of people of various ethnic backgrounds"
  //         width="100%"
  //         sx={{
  //           objectFit: 'cover',
  //         }}
  //         >
          
  //       </Box>
  //     </Box>
  //   </Grid>
  // );

  return ( 
    <Section content={servicesSectionContent} arrangement={'left'} />
  )
};

export default ServicesSection;

