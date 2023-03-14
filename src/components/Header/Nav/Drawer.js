import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';

import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StarBorder from '@mui/icons-material/StarBorder';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import useMediaQuery from '@mui/material/useMediaQuery';

import { createTheme } from '@mui/system';

import classes from './Drawer/Drawer.module.scss';
import { styled } from '@mui/material/styles';

const theme = createTheme({});

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function SwipeableTemporaryDrawer(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [openAboutMenu, setOpenAboutMenu] = useState(false);
  const [openServicesMenu, setOpenServicesMenu] = useState(false);

  const links = props.links;
  const menuOptions = props.menuOptions;

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickAbout = () => {
    setOpenAboutMenu(!openAboutMenu);
  };

  const handleClickServices = () => {
    setOpenServicesMenu(!openServicesMenu);
  };

  const list = (
    <Box
      // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      open={openDrawer}
      // onClick={() => setOpenDrawer(false)}
      sx={{
        width: '250px',
      }}
    >
      <List>
        {links.map((link, index) => {
          if (link.label === 'FWC' || link.label === 'Help Center')
            return (
              <>
                <ListItemButton
                  key={link.label}
                  component={Link}
                  to={link.href}
                  disablePadding
                  divider
                  className={
                    `${classes.drawer__item} ` +
                    classes[`drawer__item--${index + 1}`]
                  }
                  // onClick={(e) => props?.onChangeLayout(e)}
                >
                  {/* <ListItemButton sx={{ textAlign: 'center' }}> */}
                  <ListItemText
                    primary={link.label}
                    sx={{
                      '.MuiTypography-root': {
                        fontSize: '2rem',
                        fontWeight: '600',
                      },
                    }}
                  />
                </ListItemButton>
              </>
            );

          if (link.label === 'About') {
            return (
              <>
                <ListItemButton
                  key={link.label}
                  disablePadding
                  divider
                  className={
                    `${classes.drawer__item} ` +
                    classes[`drawer__item--${index + 1}`]
                  }
                  onClick={handleClickAbout}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{
                      '.MuiTypography-root': {
                        fontSize: '2rem',
                        fontWeight: '600',
                      },
                    }}
                  />
                  {openAboutMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openAboutMenu} timeout="auto" unmountOnExit>
                  {menuOptions[0].map((o, i) => {
                    return (
                      <List component="div" disablePadding>
                        <ListItemButton
                          sx={{ pl: 6 }}
                          component={Link}
                          to={o.link}
                          divider
                          onClick={() => setOpenDrawer(!openDrawer)}
                        >
                          {/* <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon> */}

                          <ListItemText
                            primary={o.name}
                            sx={{
                              '.MuiTypography-root': { fontSize: '1.4rem' },
                            }}
                          />
                        </ListItemButton>
                      </List>
                    );
                  })}
                </Collapse>
              </>
            );
          }
          if (link.label === 'Services') {
            return (
              <>
                <ListItemButton
                  key={link.label}
                  disablePadding
                  divider
                  className={
                    `${classes.drawer__item} ` +
                    classes[`drawer__item--${index + 1}`]
                  }
                  onClick={handleClickServices}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{
                      '.MuiTypography-root': {
                        fontSize: '2rem',
                        fontWeight: '600',
                      },
                    }}
                  />
                  {openServicesMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openServicesMenu} timeout="auto" unmountOnExit>
                  {menuOptions[1].map((o, i) => {
                    return (
                      <List component="div" disablePadding>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          component={Link}
                          to={o.link}
                          divider
                          onClick={() => setOpenDrawer(!openDrawer)}
                        >
                          {/* <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon> */}

                          <ListItemText
                            primary={o.name}
                            sx={{
                              '.MuiTypography-root': { fontSize: '1.4rem' },
                            }}
                          />
                        </ListItemButton>
                      </List>
                    );
                  })}
                </Collapse>
              </>
            );
          }
        })}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'fixed',
        top: 0,
        left: 0,
        paddingRight:'2rem',
        width: '100vw',
        zIndex: 2000,
        '&.MuiBox-root': { backgroundColor: '#FFFAED' },
      }}
    >
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={{
          '.MuiPaper-root': {
            backgroundColor: '#FFFAED',
          },
          zIndex: 3000,
        }}
      >
        {list}
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{
          '&:hover': { backgroundColor: 'white' },
        }}
      >
        <MenuIcon sx={{ width: '50px', height: '50px' }} />
      </IconButton>
    </Box>
  );
}
