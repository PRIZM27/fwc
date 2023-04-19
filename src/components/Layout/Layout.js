import { Fragment } from 'react';
import Box from '@mui/material/Box';

import Hero from '../Header/Hero/Hero';
import Features from './Features/Feature';

import NewMission from '../Mission/NewMission';
import ServicesSection from './Services/ServicesSection';
import TestSection from './TestSection';
import Services from './Services/Services';
import GettingStarted from './GettingStarted/GettingStarted';
import Locations from './Location/Locations';
import Footer from '../../components/Footer/Footer';


const Layout = () => { 
  return (
   <Fragment >
      <Hero />
      <Box component={'main'} sx={{
        '&  > .section:not(:nth-of-type(1))': { 
          backgroundColor: 'pink',
        },

      '& >.section' : { 
        border: '1px solid black',
      }, 
      }}>
        <Features />
        <NewMission />
        <ServicesSection />
        <Services />
        <Locations />
        <GettingStarted /> 
        <Footer />
      </Box>
   </Fragment>
  );
}

export default Layout;