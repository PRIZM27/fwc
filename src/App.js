import { useEffect } from 'react';

import './App.css';

import {ThemeProvider} from '@mui/material/styles';
import themePrimary from './components/Themes/theme';
import Root from './Routes/Root'

// package imports
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter, 
  Routes, 
  Route,
} from 'react-router-dom';

import Nav from '../src/components/Header/Nav/Nav'

import Layout from '../src/components/Layout/Layout';
import LandingPage from './Routes/LandingPage';


import Header from './components/Header/Header';
import Mission from './components/Mission/Mission';
import Features from './components/Layout/Features/Feature';
import Services from './components/Layout/Services/Services';
import GettingStarted from './components/Layout/GettingStarted/GettingStarted';
import Contact from './components/Forms/Contact/Contact';

import FAQ from '../src/components/Layout/FAQ/FAQ';



import Staff from './Routes/Staff/Staff';
import ErrorPage from './Routes/errors/error-page';

// the nav aka header shows at all times 
  // the rest of content displays under it when state changes (<Outlet />)
// the home page is the series of sections introducing the company


const router = createBrowserRouter([
  { 
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,

      }, 
      { 
        path: 'staff',
        element: <Staff />
      },
      { 
        path: 'therapy-services',
        element: <Services />
      },
      { 
        path: 'help',
        element: <FAQ />
      },
      { 
        path: 'contact',
        element: <Contact />
      }
    ]
  }
  // { 
  //   path: 'therapy-services',
  //   element: <Services />,
  //   errorElement: <ErrorPage />,
  // }
 
])

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={themePrimary}>
      <RouterProvider router={router}/>
      {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route 
        element={<LandingPage />} 
        path='/'
        errorElement={<ErrorPage />}
        />

         <Route 
        element={<Staff />} 
        path='staff' 
        errorElement={<ErrorPage />}

        />

        <Route 
        element={<Services />} 
        path='therapy-services' 
        errorElement={<ErrorPage />}

        />

          <Route 
        element={<FAQ />} 
        path='help' 
        errorElement={<ErrorPage />}

        />
      </Routes>
      </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default App;
