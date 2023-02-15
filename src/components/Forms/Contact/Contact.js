import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import classes from './_Contact.module.scss';

// images
import paperPlanes from '../../../assets/images/paper-planes-coral.png';
import { Typography } from '@mui/material';
import { textAlign } from '@mui/system';

const Contact = (props) => {
  return (
    <Grid
      container
      justifyContent='center'
      width={'100%'}
      height='75vh'
      className={classes.section__contact}
      direction={'row'}
      component="section"
      pt={'10rem'}
      sx={{
        backgroundColor:'#000'

      }}
    >
      <Grid 
      item 
      className={classes['section__contact--left']} 
      width={'45%'} 
      sx={{
        borderRight:'1px solid black',
        backgroundImage: `url(${paperPlanes})`,
        
      }}>

      </Grid>
      <Grid 
        item 
        className={classes['section__contact--right']} 
        width={'50%'} 
        alignItems='center'
        sx={{
          backgroundColor:'#000'
        }}
      >
        <Box className={classes.form__box}>
        <Typography
        textAlign={'left'}
        variant="h2"
        fontWeight={'600'}
        fontSize={'8rem'}
        width={'100%'}
        ml={'4rem'}
        mb={'3rem'}
        mt={'5rem'}
        color="secondary"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Contact
      </Typography>
        <Box
          component="form"
          action="#"
          autoComplete="off"
          className={classes.form}
        >
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="First Name"
            sx={{
              backgroundColor:'white'
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Last Name"
            sx={{
              backgroundColor:'white'
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Preferred Pronouns"
            sx={{
              backgroundColor:'white'
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Email"
            sx={{
              backgroundColor:'white'
            }}
          />

        <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Phone"
            sx={{
              backgroundColor:'white'
            }}
          />
          <Button variant='contained' type='submit' size={'large'} sx={{
            '&.MuiButtonBase-root': { 
              maxWidth: '40%',
              backgroundColor:'blue'
              // margin: '0 auto'
            }
          
          }}>Submit</Button>
        </Box>
        </Box>
       
        
      </Grid>
    </Grid>
  );
};

export default Contact;
