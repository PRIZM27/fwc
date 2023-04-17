import { ClassNames } from '@emotion/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

// icons import
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import classes from './Footer.module.scss';
import themePrimary from '../Themes/theme';

const Footer = () => {
  return (
    <Box component={'footer'} className={classes.footer}>
      <Box className={classes.waves}>
        <Box className={classes.wave} id={classes.wave1}></Box>
        <Box className={classes.wave} id={classes.wave2}></Box>
        <Box className={classes.wave} id={classes.wave3}></Box>
        <Box className={classes.wave} id={classes.wave4}></Box>
      </Box>
      <List className={classes['social-icon']}>
        <ListItem className={classes['social-icon__item']}>
          <Link className={classes['social-icon__link']} href="#">
            <IconButton
              aria-label="instagram"
              color="secondary"
              size="large"
              height="4rem"
              sx={{
                '.MuiSvgIcon-root': {
                  fontSize: '4rem',
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem className={classes['social-icon__item']}>
          <Link className={classes['social-icon__link']} href="#">
            <IconButton
              aria-label="facebook"
              disabled
              sx={{
                '.MuiSvgIcon-root': {
                  fontSize: '4rem',
                  color: themePrimary.palette.secondary.main,
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem className={classes['social-icon__item']}>
          <Link className={classes['social-icon__link']} href="#">
            <IconButton
              aria-label="linkedin"
              color="secondary"
              sx={{
                '.MuiSvgIcon-root': {
                  fontSize: '4rem',
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem className={classes['social-icon__item']}>
          <Link className={classes['social-icon__link']} href="#">
            <IconButton
              color="secondary"
              aria-label="twitter"
              sx={{
                '.MuiSvgIcon-root': {
                  fontSize: '4rem',
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
          </Link>
        </ListItem>
      </List>
      <List className={classes.menu}>
        <ListItem className={classes.menu__item}>
          <Link className={classes.menu__link} href="#">
            Home
          </Link>
        </ListItem>
        <ListItem className={classes.menu__item}>
          <Link className={classes.menu__link} href="#">
            About
          </Link>
        </ListItem>
        <ListItem className={classes.menu__item}>
          <Link className={classes.menu__link} href="#">
            Services
          </Link>
        </ListItem>
        <ListItem className={classes.menu__item}>
          <Link className={classes.menu__link} href="#">
            Team
          </Link>
        </ListItem>
        <ListItem className={classes.menu__item}>
          <Link className={classes.menu__link} href="#">
            Contact
          </Link>
        </ListItem>
      </List>
      <Typography variant="body1">
        &copy;2023 Fortitude Wellness Collective | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
