import useMediaQ from '../custom-hooks/useMediaQ';

import Grid from '@mui/material/Grid';


const Section = (props) => { 
  const smallScreenBelow = useMediaQ('down', 'sm');

  return ( 
    <Grid
     container
     direction={smallScreenBelow ? 'column' : 'row'} 
    >

    </Grid>
  )
}

export default Section;