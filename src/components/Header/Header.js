import * as React from 'react';

// package imports

// MUI imports
import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';

// custom components
import Nav from './Nav/Nav';
import Hero from './Hero/Hero';
import themePrimary from '../Themes/theme';

// styling
import classes from './_Header.module.scss';

import { Outlet } from 'react-router-dom';

const theme = createTheme({});

const MainHeader = styled(Box)(({ theme }) => ({
  width: '100vw',
  //  height: mobile ? '90vh' : '100vh',
}));

const Header = (props) => {
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    <Nav />
    </>
  );
};

export default Header;

// after laying out heading and pic, pick a place for this to go
/* 
      <Typography 
        className={classes.hero__subheading}
        variant="body1" 
        component="p" 
        fontSize='1.6rem' 
        sx={{color: theme => theme.palette.primary.main, width: '70%', textAlign:"center"}}
      >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
*/

// Call to action (goes in it's own box under heading and pic)
/*  <Stack className={classes.hero__cta} direction="row" spacing={2} mt={'3rem'}>
      <Button 
        variant="contained" 
        size='large'
        
        startIcon={<ConnectWithoutContactIcon />}
        sx={{
          width: '15rem',
        '&:hover': { backgroundColor: '#EB5E28'}
        }}
        >Contact
        </Button>
        <Button 
        variant="contained" 
        size='large'
        startIcon={<CalendarMonthIcon />}
        sx={{width: '15rem','&:hover': { backgroundColor: '#EB5E28'}
      }}

        >Yo
        </Button>
      </Stack>
      */
