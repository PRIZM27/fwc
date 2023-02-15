import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// const bungeeShadeFont = 'Bungee Shade';
const fontPrimary = `"Montserrat","Helvetica","Arial", "sans-serif"`;

// gray color: '#CCC5B9'

const themePrimary = createTheme({
  palette: { 
    common: { 
      black: '#252422',
      white: '#FFFCF2',
    },
    primary: { 
      main: '#000',
    },
    secondary:{ 
      main: '#FA8072'
    }, 
   tertiary: {
    main: '#EB5E28'

   }
  },
  typography: {   
    fontFamily: fontPrimary,
    h1: { 
      lineHeight: 1.5,
    }
  },
});

export default themePrimary;
