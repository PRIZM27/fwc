// React imports
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

// MUI utilities
import { styled } from '@mui/material/styles';

// MUI components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// package imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// images
import therapyIllustration from '../../assets/images/therapy-illustration.jpeg';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';

// style classes (sass)
import classes from './_ServicesCard.module.scss';

const theme = createTheme({});

// stores for style classes
const classNamesFront = `${classes.card__side} ${classes['card__side--front']}`;
const classNamesBack = `${classes.card__side} ${classes['card__side--back']}`;

// custom components
let servicesArr;

export default function ServicesViewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [rotate, setRotate] = useState(false);

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [...Object.values(props.service)];

  const servicesListContent = services.map((service) => {
    return (
      <ListItemText
        key={service}
        primary={service}
        className={classes.card__listitem}
        sx={{
          '.MuiTypography-root': {
            fontSize: '2rem',
            fontWeight: '500',
          },
        }}
      />
    );
  });

  const cardFrontRef = useRef();

  // event handlers
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleRotateClick = (e) => {
    console.log('event');
    setRotate(true);
  };

  const handleRotateBackClick = (e) => {
    setRotate(false);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Stack
        rowGap="2rem"
        // data-aos={'fade-up'}
        // data-aos-duration={800}
        sx={{
          width: smallScreen ? '35rem' : '23%',
          minWidth: smallScreen ? '35rem' : '28.5rem',
          maxWidth: smallScreen ? '35rem' : '45rem',
          height: smallScreen ? '60rem' : '60rem',
        }}
        className={classes.card}
        overflow={'hidden'}
      >
        <Stack
          direction="column"
          alignItems="center"
          rowGap={'1.5rem'}
          component={'div'}
          className={
            rotate
              ? `${classNamesFront} ${classes.rotate} ` +
                classes[`card__side--front-${props.cardOrder + 1}`]
              : `${classNamesFront} ` +
                classes[`card__side--front-${props.cardOrder + 1}`]
          }
          ref={cardFrontRef}
          sx={{}}
        >
          <Box
            sx={{
              width: smallScreen ? '55%' : '55%',
              height: smallScreen ? '30%' : '35%',
              display: 'flex',
              // direction:'column',
              justifyContent: 'center',
            }}
          >
            <img src={props.service.image} alt="description" width="100%" />
          </Box>
          {/* <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: 'red' }}
                aria-label="recipe"
                className={classes['Mui-avatar']}
              >
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Individual Therapy"
            subheader="February 04, 2023"
          /> */}
          <Box className={classes.card__title} mt="3rem">
            <Typography
              variant={'h4'}
              fontSize="2.2rem"
              fontWeight={600}
              textAlign={'center'}
            >
              {props.title}
            </Typography>
          </Box>
          {/* <Box className={classes.card__details}>
            <List className={classes['card__details-list']}>
              {servicesListContent}
            </List>
          </Box> */}
          <CardContent>
            <Typography
              variant="body1"
              fontSize="3.5rem"
              textAlign={'center'}
              color='secondary'
              sx={{
                fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
              }}
            >
              ${props.price} / hour
            </Typography>
            <Typography variant="body1" fontSize="1.4rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
          <Button
            onClick={handleRotateClick}
            className={classes.card__button}
            variant="contained"
            color={'primary'}
            size={'large'}
            sx={{
              width: '15rem',
              height: '5rem',
              display: 'block',
              margin: '0 auto',
            }}
          >
            Learn More
          </Button>
        </Stack>
        {/* ////////////⚠️ BACK OF CARD ⚠️  //////////// */}
        <Stack
          className={
            rotate
              ? `${classNamesBack} ${classes.rotateback} ` +
                classes[`card__side--back-${props.cardOrder + 1}`]
              : `${classNamesBack} ` +
                classes[`card__side--back-${props.cardOrder + 1}`]
          }
          direction="column"
          alignItems={'center'}
          rowGap="1.5rem"
          sx={{
            width: '100%',
          }}
          component={'div'}
        >
          <CardHeader
            title={props.title}
            sx={{
              '* .MuiTypography-root': {
                fontSize: '2rem',
                fontWeight: '600',
                textAlign: 'center',
              },
            }}
          />
          <CardContent className={classes['card__service-box']} sx={{}}>
            <Typography
              className={classes['card__service-full']}
              variant={'body1'}
              fontSize="1.4rem"
              lineHeight="1.8"
            >
              {props.service.details}
            </Typography>
          </CardContent>
          <Button
            onClick={handleRotateBackClick}
            className={classes.card__button}
            variant="contained"
            size={'large'}
            mt="2rem"
            sx={{
              width: '15rem',
              height: '5rem',
              display: 'block',
            }}
          >
            Overview
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

{
  /* <ListItemText
primary={'One-on-One sessions'}
className={classes.card__listitem}
sx={{
  '.MuiTypography-root': {
    fontSize: '1.5rem',
  },
}}
/>
<ListItemText
primary={'In-person'}
className={classes.card__listitem}
sx={{
  '.MuiTypography-root': {
    fontSize: '1.5rem',
  },
}}
/>
<ListItemText
primary={'Remote'}
className={classes.card__listitem}
sx={{
  '.MuiTypography-root': {
    fontSize: '1.5rem',
  },
}}
/>

<ListItemText
primary={'Feature'}
className={classes.card__listitem}
sx={{
  '.MuiTypography-root': {
    fontSize: '1.5rem',
  },
}}
/>

<ListItemText
primary={'Feature'}
className={classes.card__listitem}
sx={{
  '.MuiTypography-root': {
    fontSize: '1.5rem',
  },
}}
/> */
}
