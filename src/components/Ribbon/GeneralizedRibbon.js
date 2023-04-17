import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useEffect } from 'react';

import classes from './Ribbon.module.scss';

const GeneralizedRibbon = (props) => {
  const { object } = props;

  const cards = object.map((o, i) => {
    return (
      <Card
        className={'staff__card'}
        onClick={(e) => props.onHandleChangeObject(e, i)}
        key={i}
        elevation={0}
        sx={{
          width: '20rem',
          height: '25rem',
          // width: '12rem',
          // height: '20rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '2rem',
          cursor: 'pointer',
          backgroundColor: 'transparent',
        }}
      >
        <CardMedia
          sx={{
            width: '15rem',
            height: '15rem',
            // width: '10rem',
            // height: '15rem',
            borderRadius: '50%',
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'scale(110%)',
            },
          }}
          image={o.image}
        />
        <CardContent sx={{ overflow: 'hidden' }}>
          <Typography
            variant="h4"
            textAlign={'center'}
            fontSize="1.8rem"
            fontWeight="600"
          >
            {o.name}
          </Typography>
          <Typography variant="body1" textAlign={'center'} fontSize="1.4rem">
            placeholder text
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <Box
      className={classes.ribbon}
      sx={{
        width: '100%',
        // height: '250px',
        // height: '25%',
        // paddingLeft: '2rem',
        // paddingRight: '2rem',
        // zIndex: 10,
        // position: 'fixed',
        // top: '80rem',
        height: '100%',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        zIndex: 10,
        // position: 'absolute',
        // top: '80rem',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        columnGap: '3rem',
        backgroundColor: 'rgba(246, 246, 246, 0.1)',
        backdropFilter: 'blur(20px);',
      }}
    >
      <Box sx={{
        display: 'grid',
        placeItems: 'center',
      }}>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClickCapture={props.onPrevPage}

        >
          <ArrowBackIosIcon id="prev" />
        </IconButton>
      </Box>
      {cards}
      <Box sx={{
        display: 'grid',
        placeItems: 'center',
      }}>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClickCapture={props.onNextPage}
        >
          <ArrowForwardIosIcon id="next" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default GeneralizedRibbon;
