import { Outlet } from 'react-router-dom';

import Nav from '../components/Header/Nav/Nav';

const LandingPage = () => {
  return ( 
    <>
    <Nav />
    <Outlet />
    </> 
  )
}

export default LandingPage;