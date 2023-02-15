// React imports
import * as React from 'react';
import {useState, useRef, useEffect} from 'react';

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

// style classes (sass)
import classes from './_ServicesCard.module.scss';
import { Block } from '@mui/icons-material';
import { textAlign } from '@mui/system';

// stores for style classes
const classNamesFront = `${classes.card__side} ${classes['card__side--front']}`;
const classNamesBack = `${classes.card__side} ${classes['card__side--back']}`;

// custom components
let servicesArr;



export default function ServicesViewCard(props) {

  const [expanded, setExpanded] = React.useState(false);
  const [rotate, setRotate] = useState(false); 

  const services = [...Object.values(props.service)];

  const servicesListContent = services.map(service => { 
    return (
      <ListItemText
        key={service}
        primary={service}
        className={classes.card__listitem}
        sx={{
          '.MuiTypography-root': {
            fontSize: '2rem',
            fontWeight: '500'
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
  }

  const handleRotateBackClick = (e) => { 
    setRotate(false);
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  

  return (
    <>
      <Box
        data-aos={'fade-up'}
        data-aos-duration={800}
        sx={{ minWidth: '45rem' }}
        className={classes.card}
        overflow={'hidden'}
      >
        <Box 
          component={'div'} 
          className={rotate ? `${classNamesFront} ${classes.rotate} ` + classes[`card__side--front-${props.cardOrder + 1}`] : `${classNamesFront} ` + classes[`card__side--front-${props.cardOrder + 1}`]} 
          ref={cardFrontRef}>
          <CardHeader
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
          />
          <Box className={classes.card__title}>
            <Typography variant={'h4'} color="white" textAlign={'center'}>
              {props.title}
            </Typography>
          </Box>
          <Box className={classes.card__details}>
            <List className={classes['card__details-list']}>
              {servicesListContent}
            </List>
          </Box>
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
        </Box>
          {/* ////// BACK OF CARD ////// */}
        <Box
          className={rotate ? `${classNamesBack} ${classes.rotateback} ` + classes[`card__side--back-${props.cardOrder + 1}`] : `${classNamesBack} ` + classes[`card__side--back-${props.cardOrder + 1}`]}
          sx={{ width: '450px' }} 
          component={'div'}
        >
          <CardHeader title={'Individual PsychoTherapy'} sx={{
            '* .MuiTypography-root': { 
              fontSize: '3rem',
              textAlign: 'center',
            }
          }} />
          <CardContent className={classes['card__service-box']} sx={{
         
          }}>
            <Typography
              className={classes['card__service-full']}
              variant={'body1'}
            
            >
              Individual therapy involves one-on-one sessions between a trained
              therapist and a patient. The goal of individual therapy is to help
              the patient understand and work through their emotions, thoughts,
              and behaviors in order to improve their mental health and overall
              well-being. Individual therapy can be used to treat a wide range
              of mental health issues, including anxiety, depression,
              post-traumatic stress disorder (PTSD), and addiction. It can also
              be used to help individuals cope with life changes and
              transitions, such as the loss of a loved one, a career change, or
              a major move.
            </Typography>
          </CardContent>
          <Button
            onClick={handleRotateBackClick}
            className={classes.card__button}
            variant="contained"
            size={'large'}
            sx={{
              width: '15rem',
              height: '5rem',
              display: 'block',
              margin: '0 auto',
            }}
          >
            Overview
          </Button>
        </Box>
      </Box>
    </>
  );
}


{/* <ListItemText
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
/> */}