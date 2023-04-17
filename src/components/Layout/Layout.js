import { Fragment } from 'react';

import Hero from '../Header/Hero/Hero';
import Features from './Features/Feature';

import NewMission from '../Mission/NewMission';
import ServicesSection from './Services/ServicesSection';

import Services from './Services/Services';
import GettingStarted from './GettingStarted/GettingStarted';
import Locations from './Location/Locations';
import Footer from '../../components/Footer/Footer';


const Layout = () => { 
  return (
   <Fragment >
      <Hero />
      <Features />
      <NewMission />
      <ServicesSection />
      <Services />
      <Locations />
      <GettingStarted /> 
      <Footer />
   </Fragment>
  );
}

export default Layout;