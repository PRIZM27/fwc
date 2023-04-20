import * as React from 'react';
import { Fragment } from 'react';
import { useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import SwipeableTemporaryDrawer from './Drawer';

import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/system';
import classes from './_Nav.module.scss';

// sub-menu nav data
import { menuOptions } from '../../../data/navData';

const theme = createTheme({});

// reusable components 
const Nav = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#FFFCF9;',
  position: 'sticky',
  top: 0,
  zIndex: 2000,
}));

const ButtonNav = styled(Button)(({ theme }) => ({
  '&.MuiButton-root': {
    ...theme.components.button,
    width: '15rem',
    height: '4rem',
    fontSize: '1.4rem',
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      width: '7rem',
      height: '4rem',
      fontSize: '1rem',
    },
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: '#FA8072',
      color: theme.palette.primary.main,
    },
  },
}));

// accessibility
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tab-panel`,
  };
};


// primary component (default export)
const TopNav = (props) => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [valueHover, setValueHover] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
  };

  const handleClick = (e) => {
    // telling react where we want menu to be rendered
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const links = [
    {
      href: '/',
      label: 'FWC',
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

  const NavTabs = links.map((link, index) => {
    return (
      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Tab
        className={classes.nav__tab}
        key={link.label}
        component={Link}
        to={link.href}
        label={link.label}
        {...a11yProps(link.index)}
        disableRipple
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
          fontWeight: '600',
          fontSize: '1.6rem',
          [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
          },
        }}
        />
      {link.mouseOver ? <ExpandMoreIcon /> : ''}
      </Box>
      
    );
  });


  // component rendered for screens larger than 600px
  const NavTop = (
    <Nav className={classes.nav__top} component={'nav'} >
      <Tabs
        value={value}
        textColor="secondary"
        indicatorColor="none"
        onChange={handleChange}
        aria-label="navigation links group"
        sx={{
          gridRow: '1',
          width: '60%',
          '.MuiTabs-flexContainer': {
            justifyContent: 'space-between',
          },
          '.MuiButtonBase-root ': {
            transition: 'all 0.2s linear',
          },
        }}
      >
        {NavTabs}
      </Tabs>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <ButtonNav variant="contained" component={Link} to="/contact">
          Contact
        </ButtonNav>
        <ButtonNav variant="contained" component={Link}>
          Get Started
        </ButtonNav>
      </Stack>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        keepMounted
        sx={{
          zIndex: 1302,
          cursor: 'pointer',
          '.MuiList-root': {
            backgroundColor: '#FFFCF9;',
          },
          '.MuiList-padding': {
            paddingTop: 0,
            paddingBottom: 0,
          },
          '.MuiPaper-root': {
            width: '15rem',
            borderRadius: '0px',
            color: '#000',
          },
        }}
      >
        {menuOptions[valueHover]?.map((option, i) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              'hr:last-of-type': { marginBottom: 0 },
            }}
          >
            <MenuItem
              key={`${option}${i}`}
              component={Link}
              to={option.link}
              onClick={(event) => {
                handleMenuItemClick(event, i);
                handleClose(event);
              }}
              sx={{
                fontSize: '1.2rem',
              }}
            >
              {option.name}
            </MenuItem>
            <Divider />
          </Box>
        ))}
      </Menu>
    </Nav>
  );

  // render the drawer nav when screen < 600px, otherwise full top nav
  return (
    <Fragment>
      {smallScreen ? (
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
