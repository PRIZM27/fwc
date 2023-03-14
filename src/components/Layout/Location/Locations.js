// React imports

import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// sass import
import classes from './_Locations.module.scss';

// mapbox

import MapSection from '../../Map/Map';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';
const theme = createTheme();

// custom component
const SectionPolygonOdd = styled(Grid)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  // marginTop: '-11rem',
  paddingTop: '5rem',
  // paddingBottom: '5rem',
  background: '##FFFCF9',
  [theme.breakpoints.down('md')]: { 
    height: '140vh',
  }
}));

const Locations = (props) => {
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionPolygonOdd
      container
      direction={mobile ? 'column' : 'row'}
      justifyContent={mobile ? 'auto': 'center'}
      className={classes.section__locations}
      rowGap='2rem'
    >
      <Stack direction="column" width={'100%'} alignItems="center">
        <Typography
          textAlign={'center'}
          variant="h2"
          fontWeight={'600'}
          fontSize={mobile ? '6rem' : '7rem'}
          mb={'3rem'}
          color="secondary"
          sx={{
            textTransform: 'uppercase',
            overflow: 'hidden'
          }}
        >
          Locations
        </Typography>
        <Typography
          variant="body1"
          fontSize="1.6rem"
          width={mobile ? '80%' : "50%"}
          // textAlign={'center'}
          // variant="h2"
          // fontWeight={'600'}
          // fontSize={'8rem'}
          // width={'100%'}
          // mb={'3rem'}
          // color="secondary"
          // sx={{
          //   textTransform: 'uppercase',
          // }}
        >
          At this time, our services are fully remote and available only to
          residents of Virginia and D.C. Be sure to follow us on social media
          for announcements on areas we're serving next.
        </Typography>
      </Stack>

      <Grid
        className={classes.location__details}
        item
        container
        direction={mobile ? 'row' : 'column'}
        width={mobile ? '100%' : '40%'}
        justifyContent={mobile ?'center' : 'start'}
      >
        <Grid
          item
          container
          width="75%"
          direction="column"
          alignItems={'center'}
          rowGap={'3rem'}
        >
          <Stack className={classes.details} rowGap="1rem">
            <Typography variant="h4" fontWeight='600'>Mailing Address</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              sed blandit libero volutpat sed cras.
            </Typography>
          </Stack>
          <Stack className={classes.details} rowGap="1rem">
            <Typography variant="h4" fontWeight='600'>Phone</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              sed blandit libero volutpat sed cras.
            </Typography>
          </Stack>
          <Stack className={classes.details} rowGap="1rem">
            <Typography variant="h4" fontWeight='600'>Email</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              sed blandit libero volutpat sed cras.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid 
      item 
      container 
      width={mobile ? '100vw' : '50%'}
      height={mobile ? '50rem' : '100%'} 
       justifyContent='center'>
        <MapSection />
      </Grid>
    </SectionPolygonOdd>
  );
};

export default Locations;
