
import Section from '../Section/Section';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';


// import missionImage from '../../assets/images/people.webp';
import missionImage from '../../assets/images/dei.webp';


const missionContent = { 
  heading: 'Mission',
  body:  `At Fortitude Wellness Collective, our mission is to provide
        culturally competent mental health therapy services to individuals
        from diverse backgrounds. We strive to create a safe and inclusive
        environment where individuals can feel heard and understood, and
        work towards achieving their mental wellness goals.

        \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  image: missionImage,
  imageAlt:'A collage of photos showing the faces of people of various ethnic backgrounds',
  title: 'Mission Statement',
}


const theme = createTheme({});

const NewMission = () => {
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const largeScreen = useMediaQuery(theme.breakpoints.down('lg'));


  return ( 
    <Section content={missionContent} arrangement={'right'} />
  )
};

export default NewMission;

