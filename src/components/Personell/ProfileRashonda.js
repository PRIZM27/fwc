import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';

import classes from './_Profile.module.scss';

import rileynobg from '../../assets/images/staff/rileynobg.png';

const bioText = `RaShonda is an experienced clinican providing therapy services to clients in DC & VA. Her clinical interests include multicultural and multinational issues, trauma, and working with individuals navigating through racism-based traumatic stress, identity issues, and adjustment-related concerns. She has an understanding of the complexities of identity and the impact of cultural, social, and historical factors on mental health. She has unique ability to connect with people from diverse backgrounds, creating a safe and supportive space for her clients to explore their challenges and find solutions. She utilizes an eclectic and culturally sensitive approach to therapy, incorporating traditional and innovative techniques to best meet the needs of each individual. She is also a university counseling center provider passionate about assisting college-age students with adjustment, career counseling, and depression/anxiety related to school issues. She is passionate about working with historically marginalized populations and addressing mental health stigma.

If you're looking for a clinician who understands the complexities of multicultural and multinational issues and can provide compassionate and effective support. Get in touch with her today to start your journey toward healing and growth.`;

const Profile = (props) => {
  return (
    <Grid
      container
      direction={'row'}
      width="100vw"
      height="90vh"
      sx={{
        backgroundColor: '#38C2CE',
      }}
    >
         <Typography
        // data-aos="zoom-in"
        textAlign={'center'}
        variant="h2"
        fontWeight={'600'}
        fontSize={'7rem'}
        width={'100%'}
        ml={'4rem'}

        mt={'5rem'}
        color="secondary"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Rashonda Riley, LCSW, LICSW
      </Typography>
      <Grid item width="50%">
        <img
          src={rileynobg}
          alt="Carla Adams,standing with her arms folded looking directly at camera"
          width='60%'
          className={classes.bioImage}
        />
      </Grid>
      <Grid item width="50%" pt='10rem' pr='3rem'>
        <Typography variant="body1" color="white" fontSize="2.5rem" fontWeight='600' lineHeight={1.6}>
          {bioText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
