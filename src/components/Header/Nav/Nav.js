import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from'@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import classes from './_Nav.module.scss';
import { borderRadius, fontFamily, fontSize } from '@mui/system';


const ButtonPrimary = styled(Button)(({ theme }) => ({
 '&.MuiButton-root': { 
  ...theme.components.button,
  width: '10rem',
  height: '4rem',
  fontSize: '1.4rem',
  backgroundColor: theme.palette.primary.main,
  '&:hover': { 
    backgroundColor: '#FA8072',
    color: theme.palette.primary.main,
  }
 }
}));



const a11yProps= (index) => { 
  return { 
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tab-panel`
  }
}

const links = [ 
  { 
    href: '/services',
    label: 'Services'
  },
  { 
    href: '/about',
    label: 'Payment'
  },  
  { 
    href: '/placeholder',
    label: 'Contact'
  },
];

const content = links.map((link, index) => { 
  return (
   <Tab 
     key={link.label}
     label={link.label} 
     {...a11yProps(link.index)}
     disableRipple
     sx={{
       fontSize: '1.4rem',
     }} />
 )
 });

const TopNav = () => { 
  const [value, setValue] = useState(0);

  const handleChange = (event,newValue)=> { 
    console.log(newValue)
    setValue(newValue);
  }

  return ( 
    <Box
    component={'nav'}
    sx={{
      width:'100%', 
      display:'flex', 
      justifyContent:'space-between', 
      alignItems: 'center', 
      p: '1rem',
      }}>
      <Link 
        href="#"
        className={classes.logo__text} 
        sx={{ 
          maxWidth:'15rem', 
          fontSize: '1.4rem',
          textDecoration: 'none',
          fontFamily: 'Montserrat'
        }}
        >
        FWC
      </Link>
      <Box sx={{width: '50%', color: '#EB5E28'}}>
        <Tabs 
          value={value} 
          textColor='primary'
          indicatorColor='none'
          onChange={handleChange} 
          aria-label="navigation links group"
          sx={{ 
            '.MuiButtonBase-root ':{ 
              flex: 1,
              transition: 'all 0.2s linear'
            },   
            
        }}>
          {content}
        </Tabs>
      </Box>
      <Stack direction="row" spacing={2} pr={'2rem'} alignItems='center'    >
        <ButtonPrimary variant='contained'>Btn 1</ButtonPrimary>
        <ButtonPrimary variant='contained'>Btn 2</ButtonPrimary>
        <ButtonPrimary variant='contained'>Btn 2</ButtonPrimary>
      </Stack>
    </Box>
  )
}

export default TopNav;