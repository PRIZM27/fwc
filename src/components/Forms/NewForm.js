import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';



import classes from './NewForm.module.scss';

import useMediaQ from '../../utils/custom-hooks/useMediaQ';
import { Typography } from '@mui/material';

import clayPots from '../../assets/images/clay-pots-digital-art.webp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NewForm = () => { 

 const mediumScreenOrLess = useMediaQ('down', 'md');

  return ( 
   <Grid className={classes['main-container']} component='main'>
    <Box 
      className={classes.header}
      component={'header'}>
      <Typography 
        variant='h1' 
        fontSize='4rem'
        fontWeight={'bold'}
        >
          Contact Form
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Stack direction="row" justifyContent={'flex-start'} spacing={1}  >
        <Typography sx={{
          textAlign:'center'
        }}>Also connect with us on</Typography>
              <IconButton
                aria-label="instagram"
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
              <IconButton
                aria-label="facebook"
                disabled
                color="primary"
                size="large"
                sx={{
                  '.MuiSvgIcon-root': {
                    fontSize: '4rem',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="linkedin"
                sx={{
                  '.MuiSvgIcon-root': {
                    fontSize: '4rem',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
            <hr />
    </Box>
      <Box id={classes.sidebar} sx={{
        visibility: !mediumScreenOrLess ? 'visible' : 'collapse',
      }}>
        <Box id={classes.sidebar__header}>
          <Typography variant='h2' sx={{
            fontSize: '3rem',
            textAlign: 'center',
            fontFamily: `'Darker Grotesque', sans-serif`,
            overflow: 'hidden',

          }}>
            Connect with us today
          </Typography>
        </Box>
       <Box id={classes.sidebar__image}>

       </Box>
      </Box>
     <form class={classes['contact-form']}>
      <section className={classes['section__contact']}>
        <fieldset className={classes['contact-details']}>
        <legend>Contact Details</legend>
        <div className={classes.form__group}>
          <label for='firstname'>First Name </label>
          <input type='text' id='firstname' name='first_name' required/>
        </div>
        <div>
          <label for='lastname'>Last Name </label>
          <input type='text' id='lastname' name='last_name' required/>
        </div>
        <div id={classes.email__wrapper}>
          <label for='mail'>Email </label>
          <input type='email' id='mail' name='user_email' required/>
        </div>
        <div id={classes.phone__wrapper}>
          <label for='phone'>Phone </label>
          <input type='numeric' id='phone' name='user_phone'/>
        </div>
        </fieldset>
        </section>
        <div id={classes.pronouns__wrapper}>
          <label for='pronouns'>Pronouns </label>
          <select 
            name='user_pronouns' 
            id='pronouns' 
            multiple>
            <option value=' '>
              --Please choose your identifying pronouns--
            </option>
              <option value='he/him/his'>he/him/his</option>
              <option value='she/her/hers'>she/her/hers</option>
              <option value='they/them/their'>they/them/their
              </option>
          </select>
        </div>
        <div id={classes.message__wrapper}>
          <label for='message'>Message</label>
          <textarea placeholder='To include additional information you would like for us to know, type them here'></textarea>
        </div>
        <div id={classes.submit__wrapper}>
          <button type='submit'>Submit</button>
        </div>
     </form>
   </Grid>
  )
} 

export default NewForm;