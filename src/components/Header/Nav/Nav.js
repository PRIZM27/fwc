import * as React from 'react';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import useMediaQuery from '@mui/material/useMediaQuery';

import themePrimary from '../../Themes/theme';
import { createTheme } from '@mui/system';

import { styled } from '@mui/material/styles';

import classes from './_Nav.module.scss';

import SwipeableTemporaryDrawer from './Drawer';
import { Typography } from '@mui/material';

const theme = createTheme({});

const menuOptions = [
  [
    { 
      name: 'Mission',
      link: '/mission',
      activeIndex: 0,
      selectedIndex: 0,
    }, 
    { 
      name: 'Staff',
      link: '/staff',
      activeIndex: 0,
      selectedIndex: 1,
      
    }, 
    { 
      name: 'Contact',
      link: '/contact',
      activeIndex: 0,
      selectedIndex: 2,
      
    }, 
    
    // add about our founder page
  ],
  [

  {
    name: 'Therapy Services',
    link: '/therapy-services',
    activeIndex: 1,
    selectedIndex: 0,
  },
  {
    name: 'Payment/Billing',
    link: '/payment-billing',
    activeIndex: 1,
    selectedIndex: 1,
  },
  // {
  //   name: 'Policies',
  //   link: '/policies',
  //   activeIndex: 1,
  //   selectedIndex: 2,
  // },
], 

];



const Nav = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  // backgroundColor: '#A34DFF',
  // background: 'linear-gradient(135deg, hsla(33, 100%, 93%, 1) 0%, hsla(33, 100%, 80%, 1) 100%)',
  backgroundColor: '#FFFCF9;',

  // background: 'linear-gradient(90deg, hsla(0, 0%, 55%, 1) 0%, hsla(265, 97%, 60%, 1) 100%)',
  position: 'fixed',
  top: 0,
  zIndex: 10,
}));

const NavLink = styled(Link)(({ theme }) => ({
  maxWidth: '15rem',
  fontSize: '1.4rem',
  textDecoration: 'none',
  fontFamily: 'Montserrat',
}));

const ButtonNav = styled(Button)(({ theme }) => ({
  '&.MuiButton-root': {
    ...theme.components.button,
    width: '10rem',
    height: '4rem',
    fontSize: '1.4rem',
    [theme.breakpoints.down('md')]: {
      width: '7rem',
      height: '4rem',
      fontSize: '1.2rem',
    },
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: '#FA8072',
      color: theme.palette.primary.main,
    },
  },
}));

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tab-panel`,
  };
};

// const content = links.map((link, index) => {
//   return (
//     <Tab
//       component='a'
//       key={link.label}
//       label={link.label}
//       {...a11yProps(link.index)}
//       disableRipple
//       onClick={onChangeLayout}
//       sx={{
//         fontSize: '1.6rem',
//         [themePrimary.breakpoints.down('md')]: {
//           fontSize: '1.2rem',
//         },
//       }}
//     />
//   );
// });

// temporarily moved mapping data to component in function body to use props
// analyze the effect on rendering and if I have to apply useMemo or useCallback
// const content = links.map((link, index) => {
//   return (
//    <Tab
//      key={link.label}
//      label={link.label}
//      {...a11yProps(link.index)}
//      disableRipple
//      sx={{
//        fontSize: '1.6rem',
//        fontWeight:'600'
//      }} />
//  )
//  });

const TopNav = (props) => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [valueHover, setValueHover] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const handleClick = (e) => {
    // telling react where we want menu to be rendered
    setAnchorEl(e.currentTarget);
    // tell menu to actually be rendered (shown)
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    console.log('Menu Item Clicked');
  };

  const links = [
    {
      href: '/',
      label: 'FWC'
    },
    {
      href: '/about',
      label: 'About',
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleClick(event),
    },
    {
      href: '/services',
      label: 'Services',
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleClick(event),
    },

    {
      href: '/help',
      label: 'Help Center',
    },
  ];

  const content = links.map((link, index) => {
    return (
      <Tab
        key={link.label}
        component={Link}
        to={link.href}
        label={link.label}
        {...a11yProps(link.index)}
        disableRipple
        onClick={props.onChangeLayout}
        aria-owns={link?.ariaOwns}
        aria-haspopup={link?.ariaPopup}
        onMouseOver={(e) => {
          // console.log(index,'index of hovered tab link');
          link?.mouseOver(e);
          setValueHover(index - 1);
        }}
        sx={{
          cursor: 'pointer',
          color: '#000',
          fontWeight:'600',
          fontSize: '1.6rem',
          [themePrimary.breakpoints.down('md')]: {
            fontSize: '1.2rem',
          },
        }}
      />
    );
  });


  const NavTop = (
    <Nav className={classes.nav__top} component={'nav'}>
   
      {/* <Box
        sx={{
          width: '60%',
          // color: '#EB5E28'
        }}
      >
        <Tabs
          value={value}
          textColor="secondary"
          indicatorColor="none"
          onChange={handleChange}
          aria-label="navigation links group"
          sx={{
            '.MuiTabs-flexContainer': {
              justifyContent: 'space-between',
            },
            '.MuiButtonBase-root ': {
              transition: 'all 0.2s linear',
            },
          }}
        >
          {content}
        </Tabs>
      </Box> */}
    
        <Tabs
          value={value}
          textColor="secondary"
          indicatorColor="none"
          onChange={handleChange}
          aria-label="navigation links group"
          sx={{
            width:'60%',
            '.MuiTabs-flexContainer': {
              justifyContent: 'space-between',
            },
            '.MuiButtonBase-root ': {
              transition: 'all 0.2s linear',
            },
          }}
        >
          {content}
        </Tabs>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <ButtonNav variant="contained" component={Link} to='/contact'>Contact</ButtonNav>
        <ButtonNav variant="contained">Btn 2</ButtonNav>
      </Stack>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        sx={{ 
          zIndex: 1302,
          cursor:'pointer',
          '.MuiList-root': { 
          backgroundColor: '#FFFCF9;',
        }
  

        }}
        keepMounted
        classes={{ paper: classes.menu }}
      >
        {menuOptions[valueHover]?.map((option, i) => (
          <>
            <MenuItem
              key={`${option}${i}`}
              component={Link}
              to={option.link}
              onClick={(event) => {
                handleMenuItemClick(event, i);
                handleClose(event);
              }}
              sx={{
                fontSize:'1.2rem',

              }}
            >
              {option.name}
            </MenuItem>
            <Divider />
            </>
        ))}
      </Menu>
    </Nav>
  );

  return (
    <Fragment>
      {matches ? (
        <SwipeableTemporaryDrawer
          links={links}
          menuOptions={menuOptions}
          onChangeLayout={props.onChangeLayout}
        />
      ) : (
        NavTop
      )}
    </Fragment>
  );
};

export default TopNav;
