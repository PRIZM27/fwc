import { styled } from '@mui/material/styles';

import ButtonLarge from '../../Buttons/ButtonLarge';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';

import registerPhone from '../../../assets/images/registering-phone-removebg.png';

const theme = createTheme({});

const GettingStarted = () => {
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
        sx={{
          order: smallScreen ? 2 : 1,
          paddingTop: '2rem',
        }}
      >
        <Typography
          textAlign={'center'}
          variant="h2"
          fontSize={smallScreen ? '4rem' : '6rem'}
          color='secondary'
          // width={'100%'}
          // ml={'4rem'}
          // mb={'3rem'}
          // mt={'5rem'}
          sx={{
            textTransform: 'uppercase',
            overflow: 'hidden'
          }}
        >
          Getting Started is Easy!
        </Typography>
        <Typography
          variant="body1"
          fontSize={smallScreen ? '1.4rem' : '1.6rem'}
          lineHeight={2}
          width="90%"
          textAlign='center'
          // pl={'4rem'}
        >
          {`If you're interested in any of the services we offer, this is how to do it`}
        </Typography>
      </Grid>

      <Box
        width={smallScreen ? '50%' : '50rem'}
        minWidth='30rem'
        m="0 auto"
        sx={{
           borderRadius: '.5rem',
           order: smallScreen ? 1 : 2,
       }}
        
      >
        <img
          src={registerPhone}
          alt="illustration of woman meditating with legs crossed and folded, looking peaceful"
          width="100%"
        />
      </Box>
    </Grid>
  );
};

export default GettingStarted;
