import { Fragment } from 'react';
import Hero from '../Header/Hero/Hero';
import Mission from '../Mission/Mission';
import Features from './Features/Feature';
import Services from './Services/Services';
import GettingStarted from './GettingStarted/GettingStarted';
import Locations from './Location/Locations';
import Footer from './Footer/Footer';


const Layout = () => { 
  return (
   <Fragment >
      <Hero />
      <Mission />
      <Features />
      <Services />
      <Locations />
      <GettingStarted /> 
      <Footer />
   </Fragment>
  );
}

export default Layout;