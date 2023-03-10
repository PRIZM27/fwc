import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Profile from '../../components/Personell/Profile';

import Ribbon from '../../components/Ribbon/Ribbon';
import StaffCard from '../../components/Cards/StaffCard/StaffCard';

import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';

// images

// Rashonda
// import rriley from '../../assets/images/staff/rriley-no-bg.png';
import rriley from '../../assets/images/staff/rriley-no-bg-copy.png';

import rileyCardImage from '../../assets/images/staff/riley-card-photo.jpeg';

// Carla
import carla from '../../assets/images/staff/carla-no-bg.png';
import cardlaCardImage from '../../assets/images/staff/carla-card-image.png';

import { create } from '@mui/material/styles/createTransitions';

const staff = [
  {
    id: 'rashonda-riley',
    name: 'Rashonda Riley',
    image: rriley,
    cardImage: rileyCardImage,
    altText: 'Rashonda Riley standing on Washington D.C. sidewalk',
    // bgColor: '#75ECE6',
    bgColor: 'linear-gradient(45deg, hsla(167, 68%, 73%, 1) 0%, hsla(178, 59%, 48%, 1) 100%)',
    headingColor: '#FA8072',
    title: 'Therapist',
    licenses: ['LCSW, LICSW'],
    bio: `RaShonda is an experienced clinican providing therapy services to clients in DC & VA. Her clinical interests include multicultural and multinational issues, trauma, and working with individuals navigating through racism-based traumatic stress, identity issues, and adjustment-related concerns. 
    
    She has an understanding of the complexities of identity and the impact of cultural, social, and historical factors on mental health. She has unique ability to connect with people from diverse backgrounds, creating a safe and supportive space for her clients to explore their challenges and find solutions. She utilizes an eclectic and culturally sensitive approach to therapy, incorporating traditional and innovative techniques to best meet the needs of each individual. 

    If you're looking for a clinician who understands the complexities of multicultural and multinational issues and can provide compassionate and effective support. Get in touch with her today to start your journey toward healing and growth.`,
  },
  {
    id: 'carla-adams',
    name: 'Carla Adams',
    image: carla,
    cardImage: cardlaCardImage,
    altText: 'Carla Adams standing, facing the camera with her arms folded',
    // bgColor: '#F3DD71',
    bgColor: 'linear-gradient(90deg, hsla(40, 94%, 74%, 1) 0%, hsla(60, 89%, 72%, 1) 100%)',
    headingColor: '#DD8AEA',
    title: '',
    licenses: ['ALC'],
    bio: `Carla is a licensed Mental Health Therapist, experienced in health & wellness. She is equipped with the latest tools and techniques to help her clients reach their goals.  She deeply understands the mind-body connection and how it affects overall wellness.  She has a unique ability to listen and understand the needs of her clients and create personalized plans that cater to their individual needs and lifestyle.
    
    Carla’s holistic approach to wellness encompasses all aspects of life including physical, emotional, mental, and spiritual health. Her mission is to empower her clients to take control of their health and make sustainable changes that lead to a happier and more fulfilling life.
    
    If you're looking for a supportive and knowledgeable coach to help you on your wellness journey, look no further than Carla. Get in touch with her today to start your journey towards a healthier, happier life!`,
  },
];

const theme = createTheme({});

const Staff = () => {
  const [person, setPerson] = useState(0);

  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChangePerson = (e, index) => {
    console.log(e.target);
    setPerson(index);
  };

  if (mobile) {
    return (
      <Box
        className={'mobile__cards-container'}
        sx={{
          // width: '45rem',
          width: '100vw',
          // height: '100vh',
          paddingTop: '8rem',
          // margin: '10rem auto 0 auto',
          // backgroundColor: '#FDC600',
         backgroundColor: '#FFFAED',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '3rem',
        }}
      >
        <Typography 
          variant='h1' 
          fontWeight='600'
          color='secondary'
          sx={{
            fontFamily: ' "Shrikhand", "Helvetica", "Arial", sans-serif',
            
          }}
        >
          Meet the team
        </Typography>
        {staff.map((s, i) => (
          <StaffCard key={i} person={s} />
        ))}
        
      </Box>
    );
  }

  return (
    <Grid 
    container 
    width="100vw" 
    height="100vh" 
    sx={{ 
      display: 'grid',
    }}
    >
      <Profile person={staff[person]} />
      <Ribbon
        className="ribbon"
        staff={staff}
        onHandleChangePerson={handleChangePerson}
      />
    </Grid>
  );
};

export default Staff;

/* 
<Grid
    container
    className="staff"
    component="section"
    width="100vw"
    height='100vh'
    sx={{
      // paddingTop: '15rem',
      paddingBottom: '10rem',
      // background: '#312E2E',
      background: '#fff',
      // clipPath:'polygon(0 10%, 100% 0, 100% 100%, 0 90%)'
    }}
  >
      <Typography
          textAlign={'center'}
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
          Meet the Team
        </Typography>
    <Grid
      item
      container
      direction="row"
      justifyContent={'center'}
      columnGap={'5%'}
      pb={'5rem'}
    >
      <Box>
        <Typography variant='h3' color='secondary'>Rashonda Riley (Founder)</Typography>
        <Typography variant='h4' color='secondary'>LCSW, LICSW </Typography>

      <Card>
        <CardMedia 
          component='img'
          height='600px'
          image={rashonda}
          alt='Rashonda Riley, LCSW, LICSW'
          sx={{
            cursor: 'pointer'
          }}
        />
     </Card >

      </Box>
     <Box >
     <Typography variant='h3' color='secondary'>Carla Adams</Typography>
     <Typography variant='h4' color='secondary'>ALC</Typography>

     <Card>
        <CardMedia 
          component='img'
          height='600px'
          image={carla}
          alt='Carla Adams, ALC'
          sx={{
            cursor: 'pointer'
          }}
        />
     </Card >
     </Box>
     



    </Grid>
  </Grid>
)
  
};
*/
