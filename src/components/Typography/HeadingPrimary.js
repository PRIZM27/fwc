import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import themePrimary from '../Themes/theme';


const HeadingPrimary = styled(Typography)(({ theme }) => ({
  fontSize: '7rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
  fontWeight: 400,
  fontFamily: ' "Montserrat", "Helvetica", "Arial", sans-serif',
 
}));

export default HeadingPrimary