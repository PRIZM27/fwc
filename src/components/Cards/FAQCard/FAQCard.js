import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';


import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';

import classes from './FAQCard.module.scss'

import { styled } from '@mui/material/styles';

const theme = createTheme({});



const FAQCard = (props) => { 
  const match = useMediaQuery(theme.breakpoints.up('md'));

//  const {primary} = props.topic;
//  const { details } = props.topic;



return (
  <Card 
    className={classes.faq__card}
    sx={{
      minWidth: match ? '35rem' : '90%',
      maxWidth: match ?  '30%' : '40rem',
    }}>
      <Typography 
      variant='h4' 
      fontSize='1.6rem'
      fontWeight={600}
      textAlign='center' 
      sx={{
        // width: '100%',
        height: '5rem',
        // background: 'linear-gradient(90deg, hsla(340, 80%, 69%, 1) 0%, hsla(15, 93%, 71%, 1) 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      
      >
        {props.primary}
      </Typography>
    <CardContent sx={{
    }}>
      <Typography variant='body1' fontSize={'1.2rem'}>
          {props?.details}
      </Typography>
    </CardContent>
  </Card>
)

}

export default FAQCard;