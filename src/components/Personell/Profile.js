import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// icons import
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import classes from './_Profile.module.scss';

const Profile = (props) => {
  const { person } = props;

  return (
    <Box>
      <Grid
        container
        direction={'row'}
        width="100vw"
        height="100vh"
        pt="10rem"
        sx={{
          // backgroundColor: person.bgColor,
          // backgroundColor: '#F3DD71',
          // backgroundColor: '#E7AE54',
          background: person.bgColor,
        }}
      >
        <Grid 
          item 
          container
          width="50%" 
          data-aos="fade-up" 
          data-aos-delay="500"
          sx={{
            display: 'grid',
            justifyContent: 'center',
            paddingTop: '3rem'
          }}
          >
          <img
            src={person.image}
            alt={person.altText}
            width="110%"
            // minWidth='50%'
            className={classes.bioImage}
          
          />
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          container
          direction="column"
          width="50%"
          pr="3rem"
        >
          <Typography
            // data-aos="zoom-in"
            // textAlign={'center'}
            variant="h2"
            fontWeight={'600'}
            fontSize={'7rem'}
            width={'100%'}
            // ml={'4rem'}
            mt={'5rem'}
            // color="#A600FF"
            color={person.headingColor}
            sx={{
              textTransform: 'uppercase',
              fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
              overflow: 'hidden',
            }}
          >
            {person.name}
          </Typography>
          <Typography variant="h3" fontSize={'2.5rem'}>Licensed Mental Health Therapist</Typography>
          <Typography
            variant="body1"
            color="black"
            fontSize="1.4rem"
            fontWeight="400"
            lineHeight={1.8}
            width='80%'
          >
            {person.bio}
          </Typography>
            <Stack direction="row" justifyContent={'flex-start'} spacing={1}  >
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
                color="linkedin"
                aria-label="add an alarm"
                sx={{
                  '.MuiSvgIcon-root': {
                    fontSize: '4rem',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
