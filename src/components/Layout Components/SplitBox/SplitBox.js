import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const theme = createTheme({});




const Split = styled(Stack)(({theme}) => ({
  border: '1px solid black',
  [theme.breakpoints.up('md')]: { 
    direction:'row',
    width: '85vw',
    height: '100vh',
  },
  [theme.breakpoints.down('md')]: { 
    direction: 'column',
    width: '45rem',
    height: '100vh',

  }
}));

const SplitBox = styled(Box)(({theme}) => ({
  display: 'flex',
  border: '1px solid black',
  [theme.breakpoints.down('md')]: { 
   width: '100%',
  }
 }));



const SplitContainer = (props) => { 

  // const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return ( 
    <Split>
      {props.children}
    </Split>
  )

}

export default SplitContainer;