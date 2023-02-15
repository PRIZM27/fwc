import {Fragment} from 'react';
import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Mission from '../MIssion/Mission';
import Services from './Services/Services';
import Locations from './Location/Locations';
import Contact from '../Forms/Contact/Contact';

const Layout = () => { 
  return (
   <Box className="main">
      <Header className='section--hidden' />
      <Mission />
      <Services />
      <Locations />
      <Contact />
   </Box>
  );
}

export default Layout;