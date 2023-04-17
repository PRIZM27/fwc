import { styled } from '@mui/material/styles';

import ButtonLarge from '../../Buttons/ButtonLarge';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';

import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SpeedIcon from '@mui/icons-material/Speed';

import classes from './Features.module.scss';

import useMediaQuery from '@mui/material/useMediaQuery';
import themePrimary from '../../Themes/theme';

const features = [
  {
    feature: 'Inclusive',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: <Diversity2Icon sx={{ fontSize: '4rem', display: 'block' }} />,
  },
  {
    feature: 'Convenient',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: <SettingsRemoteIcon sx={{ fontSize: '4rem', display: 'block' }} />,
  },

  {
    feature: 'Agile',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: <SpeedIcon sx={{ fontSize: '4rem', display: 'block' }} />,
  },
];

const FeatureBox = styled(Paper)(({ theme }) => ({
  width: '90%',
  height: '55rem',
  backgroundColor: '#fff',
  borderRadius: '.5rem',
  rowGap: '1rem',
  padding: '1rem',
  [theme.breakpoints.up('md')]: {
    height: '30rem',
  },
}));

export const FeatureBoxSet = (props) => {

  const {feature} = props;
  
  return (
    <FeatureBox direction="column" onMouseOver={props.onMouseOver} {...props} >
      <Stack direction="row" alignItems="center" columnGap="2rem">
        {feature.icon}
        <Typography fontSize="1.8rem" fontWeight="600">
          {feature.feature}
        </Typography>
      </Stack>
      <Typography fontSize="1.2rem">{feature?.details}</Typography>
    </FeatureBox>
  );
};

const featureContent = features.map((f, i) => (
  <FeatureBoxSet feature={f} key={`${f.feature}${f.i}`} />
));

const Features = () => {
  const mobile = useMediaQuery(themePrimary.breakpoints.down('md'));
  const smallScreen = useMediaQuery(themePrimary.breakpoints.down('sm'));

  // return (
  //   <Grid
  //     component="section"
  //     container
  //     direction="column"
  //     alignItems="center"
  //     sx={{
  //       width: '100vw',
  //       height: '100vh',
  //       padding: mobile ? '0' : '5rem',
  //       backgroundColor: '#FFFCF9',
  //       position: 'absolute',
        
  //     }}
  //   >
  //     <Grid
  //       component='section'
  //       className='section__business-highlights'
  //       container
  //       item
  //       // direction={mobile ? "column" : 'row'}
  //       direction={'column'}
  //       // flexWrap={mobile ? 'nowrap' : 'wrap'}
  //       // alignItems="center"
  //       sx={{
  //         width: mobile ? '100%' : '80%',
  //         backgroundColor: '#FFEFDB',
  //         paddingTop: '2rem',
  //         paddingBottom: '2rem',
  //       }}
  //     >
  //       <Stack
  //         direction={'column'}
  //         alignItems="center"
  //         sx={{
  //           width: '100%',
  //           rowGap: '2rem',
  //         }}
  //       >
  //         <Stack
  //           direction='row'
  //           sx={{
  //             width: '80%',
  //             height: '25rem',
  //             backgroundColor: '#000',
  //             borderRadius: '.5rem',
  //             padding: '2rem',
  //             overflow: 'hidden',
  //             display: 'flex',
  //           }}
  //         >
  //           <Stack
  //             direction="row"
  //             justifyContent={'space-between'}
  //             sx={{
  //               width: smallScreen ? '100%' : '60%',
  //             }}
  //           >
  //             <Typography
  //               variant="h2"
  //               color={themePrimary.palette.common.white}
  //               sx={{
  //                 fontSize: mobile ? '3rem' : '6rem',
  //                 fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
  //                 overflow: 'hidden',
  //                 span: {
  //                   display: 'block',
  //                   overflow: 'hidden',
  //                 },
  //               }}
  //             >
  //               The 
  //               <span className={classes.feature__span}>Fortitude</span>{' '}
  //               Difference
  //             </Typography>
  //           </Stack>
  //           <Stack
  //             width="40%"
  //             direction="column"
  //             justifyContent="space-between"
  //             alignItems="center"
  //           >
  //             <Typography variant="body1" color="#fff">
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //               enim ad minim veniam, quis nostrud exercitation.
  //             </Typography>
  //             <ButtonLarge
  //               sx={{
  //                 backgroundColor: '#fff',
  //                 '&:hover': {
  //                   backgroundColor: '#FA8072',
  //                   color: '#000',
  //                 },
  //               }}
  //             >
  //               Get Started
  //             </ButtonLarge>
  //           </Stack>
  //         </Stack>
  //         <Stack
  //           direction={mobile ? 'column' : 'row'}
  //           rowGap={mobile && '1rem'}
  //           columnGap={!mobile && '1rem'}
  //           alignItems={mobile && 'center'}
  //           width="90%"
  //         >
  //           {featureContent}
  //         </Stack>
  //       </Stack>
  //     </Grid>
  //   </Grid>
  // );
  return (

        <Grid
          component='section'
          className='section__business-highlights'
          container
          item
          // direction={mobile ? "column" : 'row'}
          direction={'column'}
          // flexWrap={mobile ? 'nowrap' : 'wrap'}
          // alignItems="center"
          sx={{
            width: mobile ? '100%' : '80%',
            backgroundColor: '#FFEFDB',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            position: 'relative',
            top: '-150px',
            left: '10%',
          }}
        >
          <Stack
            direction={'column'}
            alignItems="center"
            sx={{
              width: '100%',
              rowGap: '2rem',
            }}
          >
            <Stack
              direction='row'
              sx={{
                width: '80%',
                height: '25rem',
                backgroundColor: '#000',
                borderRadius: '.5rem',
                padding: '2rem',
                overflow: 'hidden',
                display: 'flex',
              }}
            >
              <Stack
                direction="row"
                justifyContent={'space-between'}
                sx={{
                  width: smallScreen ? '100%' : '60%',
                }}
              >
                <Typography
                  variant="h2"
                  color={themePrimary.palette.common.white}
                  sx={{
                    fontSize: mobile ? '3rem' : '6rem',
                    fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
                    overflow: 'hidden',
                    span: {
                      display: 'block',
                      overflow: 'hidden',
                    },
                  }}
                >
                  The 
                  <span className={classes.feature__span}>Fortitude</span>{' '}
                  Difference
                </Typography>
              </Stack>
              <Stack
                width="40%"
                direction="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1" color="#fff">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation.
                </Typography>
                <ButtonLarge
                  sx={{
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: '#FA8072',
                      color: '#000',
                    },
                  }}
                >
                  Get Started
                </ButtonLarge>
              </Stack>
            </Stack>
            <Stack
              direction={mobile ? 'column' : 'row'}
              rowGap={mobile && '1rem'}
              columnGap={!mobile && '1rem'}
              alignItems={mobile && 'center'}
              width="90%"
            >
              {featureContent}
            </Stack>
          </Stack>
        </Grid>
    );
};

export default Features;
