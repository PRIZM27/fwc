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


// custom component
const SectionPolygonOdd = styled(Grid)(({ theme }) => ({
  width: '100vw',
  height: '70rem',
  // marginTop: '-11rem',
  paddingTop: '5rem',
  paddingBottom: '10rem',
  background: '#000',
}));



const Locations = (props) => {



  return (
    <SectionPolygonOdd
      container
      direction={'row'}
      className={classes.section__locations}
    >
      <Typography
        textAlign={'center'}
        variant="h2"
        fontWeight={'600'}
        fontSize={'8rem'}
        width={'100%'}
        mb={'3rem'}
        color="secondary"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Locations
      </Typography>
      <Grid
        className={classes.location__details}
        item
        container
        width={'40%'}
        justifyContent={'center'}
      >
        <Grid
          item
          container
          width="75%"
          direction="column"
          alignItems={'center'}
          rowGap={'3rem'}
        >
          <Box className={classes.details}>
            <Typography variant="h4">Mailing Address</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              sed blandit libero volutpat sed cras.
            </Typography>
          </Box>
          <Box className={classes.details}>
            <Typography variant="h4">Phone</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              sed blandit libero volutpat sed cras.
            </Typography>
          </Box>
          <Box className={classes.details}>
            <Typography variant="h4">Email</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              sed blandit libero volutpat sed cras.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item container width="50%">
        <MapSection />
      </Grid>
    </SectionPolygonOdd>
  );
};

export default Locations;
