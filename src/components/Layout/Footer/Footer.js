import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '20rem',
        backgroundColor: '#FFFAED',
        padding: '2rem',

        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        columnGap: '3rem',
      }}
    >
      <Stack>
        <Typography
          fontSize="2rem"
          fontWeight="600"
          color='secondary'
          sx={{
            fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',

            '.middle': { 
              color: 'brown',
              margin: '0 5px',
            }
          }}
        >
          Fortitude
          <span className='middle'>Wellness</span> 
          Collective
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>

      <Stack alignItems='center'>
        <Typography fontSize={'1.6rem'}>
          <Link>Home</Link>
        </Typography>
        <Typography fontSize={'1.6rem'}>
          <Link>Staff</Link>
        </Typography>

        <Typography fontSize={'1.6rem'}>
          <Link>Other Link</Link>
        </Typography>
        <Typography fontSize={'1.6rem'}>
          <Link>Other Link</Link>
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent={'flex-start'}
        alignItems="start"
        // spacing={1}
      >

        <Stack width='100%' direction='row' justifyContent={'space-around'}>
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
        
      </Stack>
    </Box>
  );
};

export default Footer;
