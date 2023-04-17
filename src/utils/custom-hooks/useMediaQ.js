import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/system';

// the function should accept
  // flag which represents viewport size useMediaQuery should use
const theme = createTheme();

const useMediaQ = (direction, size) => { 

  

  return useMediaQuery(theme.breakpoints[direction](`${size}`))

}

export default useMediaQ;