import { useState, useRef, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

import classes from './StaffCard.module.scss';

import RotatingCard from '../RotatingCard/RotatingCard';

// stores for style classes
const classNamesFront = `${classes.card__side} ${classes['card__side--front']}`;
const classNamesBack = `${classes.card__side} ${classes['card__side--back']}`;

const StaffCard = (props) => {
  const [rotate, setRotate] = useState(false);

  const cardFrontRef = useRef();

  const { person } = props;

  const [firstName, lastName] = person.name.split(' ');

  const handleRotateClick = (e) => {
    console.log('event');
    setRotate(true);
  };

  const handleRotateBackClick = (e) => {
    setRotate(false);
  };

  return (
    <Box
      // data-aos={'fade-up'}
      // data-aos-duration={800}
      sx={{ minWidth: '35rem', }}
      className={classes.card}
      overflow={'hidden'}
    >
      <Box
        component={'div'}
        className={
          rotate
            ? `${classNamesFront} ${classes.rotate} ` +
              classes[`card__side--front-${props.cardOrder + 1}`]
            : `${classNamesFront} ` +
              classes[`card__side--front-${props.cardOrder + 1}`]
        }
        ref={cardFrontRef}
      >
        <CardMedia
          className={classes.card__image}
          component="img"
          image={person.cardImage}
          width="100%"
          height="250px"
          sx={{
            clipPath: 'polygon(0 0%, 100% 0%, 100% 90%, 0% 100%)',
          }}
        />
        <CardContent>
          <Typography variant="h4" color="black" textAlign="center">
            {person.name}
          </Typography>
          <Typography textAlign="center">
            {person.licenses.join(',')}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
        <Stack rowGap={'1rem'}>
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
              overflow: 'hidden',
            }}
          >
            Learn More
          </Button>
          <Button
            // onClick={handleRotateBackClick}
            className={classes.card__button}
            variant="contained"
            size={'large'}
            sx={{
              width: '15rem',
              height: '5rem',
              display: 'block',
              margin: '0 auto',
              overflow: 'hidden',
            }}
          >
            {`Book with`} <span className={classes['card__text-break']}><Link to='https://fortitudewellnesscollective.clientsecure.me/request/service'>{`${firstName} ${lastName}`}</Link></span>
          </Button>
        </Stack>
      </Box>
      {/* ////// BACK OF CARD ////// */}

      <Box
        className={
          rotate
            ? `${classNamesBack} ${classes.rotateback} ` +
              classes[`card__side--back-${props?.cardOrder + 1}`]
            : `${classNamesBack} ` +
              classes[`card__side--back-${props?.cardOrder + 1}`]
        }
        sx={{ width: '350px', padding: '2rem' }}
        component={'div'}
      >
        <Typography variant='body1' fontSize='1.2rem'>
          {person.bio.split('\n').map(p => (
            <span key={`${p.name}${Math.random()}`} className={classes['card__text-break']}>{p}</span>
          ))}
        </Typography>
        <Button
          onClick={handleRotateBackClick}
          className={classes.card__button}
          variant="contained"
          size={'large'}
          sx={{
            width: '15rem',
            height: '5rem',
            display: 'block',
            margin: '2rem auto',
          }}
        >
          Front
        </Button>
      </Box>
    </Box>
  );
};

export default StaffCard;
