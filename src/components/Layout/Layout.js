import {useState} from 'react';
import {Fragment} from 'react';
import { Outlet } from 'react-router-dom';




import Box from '@mui/material/Box';

import Nav from '../Header/Nav/Nav'
import Header from '../Header/Header';
import Hero from '../Header/Hero/Hero';
import Mission from '../Mission/Mission';
import Features from './Features/Feature';
import Services from './Services/Services';
import GettingStarted from './GettingStarted/GettingStarted';
import Locations from './Location/Locations';
import Contact from '../Forms/Contact/Contact';

import Profile from '../Personell/Profile';
import Ribbon from '../Ribbon/Ribbon';

import SwipeableTemporaryDrawer from '../Header/Nav/Drawer';

import FAQ from './FAQ/FAQ';




const staff = [
  { 
    name: 'Rashonda Riley',
    image: '../../../../assets/images/staff/rriley-cropped.jpeg',
    altText:'Rashonda Riley standing on Washington D.C. sidewalk',

    title: 'Therapist',
    licenses: ['LCSW, LICSW'],
    bio: `RaShonda is an experienced clinican providing therapy services to clients in DC & VA. Her clinical interests include multicultural and multinational issues, trauma, and working with individuals navigating through racism-based traumatic stress, identity issues, and adjustment-related concerns. She has an understanding of the complexities of identity and the impact of cultural, social, and historical factors on mental health. She has unique ability to connect with people from diverse backgrounds, creating a safe and supportive space for her clients to explore their challenges and find solutions. She utilizes an eclectic and culturally sensitive approach to therapy, incorporating traditional and innovative techniques to best meet the needs of each individual. She is also a university counseling center provider passionate about assisting college-age students with adjustment, career counseling, and depression/anxiety related to school issues. She is passionate about working with historically marginalized populations and addressing mental health stigma.

    If you're looking for a clinician who understands the complexities of multicultural and multinational issues and can provide compassionate and effective support. Get in touch with her today to start your journey toward healing and growth.`
    
  },
  { 
    name: 'Carla Adams',
    image: '../../../../assets/images/staff/carla-no-bg.png',
    altText:'Carla Adams standing, facing the camera with her arms folded',
    title: '',
    licenses: ['ALC'],
    bio: `Carla is a licensed Mental Health Therapist, experienced in health & wellness. She is equipped with the latest tools and techniques to help her clients reach their goals.  She deeply understands the mind-body connection and how it affects overall wellness.  She has a unique ability to listen and understand the needs of her clients and create personalized plans that cater to their individual needs and lifestyle. 

    Carla’s holistic approach to wellness encompasses all aspects of life including physical, emotional, mental, and spiritual health. Her mission is to empower her clients to take control of their health and make sustainable changes that lead to a happier and more fulfilling life.
    
    If you're looking for a supportive and knowledgeable coach to help you on your wellness journey, look no further than Carla. Get in touch with her today to start your journey towards a healthier, happier life!`
  },
];


const Layout = () => { 

  const [showSection, setShowSection] = useState('fwc');

  // depending on which link within Nav is selected, the layout should change to reflect it
  // pass down a handler function to Nav

  const onHandleChangeLayout = (e) => { 
    // this function receives information about which link was clicked
      // if services, link clicked, show services section
    console.log('Layout change handler executed!');
    console.log(e.target.innerHTML.toLowerCase());
    setShowSection(e.target.innerHTML.toLowerCase());
  }

  return (
   <Fragment >
    {/* <RouterProvider router={router}/> */}
      {/* <Nav onChangeLayout={onHandleChangeLayout}/> */}
      {/* <Header className='section--hidden' />  */}
      <Hero />
      <Mission />
      <Features />
      <Services />
      <GettingStarted /> 
      {/* <Locations />}
      {showSection ==='contact' && <Contact />}
      {showSection === 'staff' && <Staff />}   
      {showSection === 'help center' && <FAQ />}  */}
   </Fragment>
  );
}

export default Layout;