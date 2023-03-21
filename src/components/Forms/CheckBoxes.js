import {useEffect, useState} from 'react';

import Box from '@mui/material/Box';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const checkboxOptions = ['Morning', 'Afternoon', 'Evening'];

// How many options can a user have for availability?
// If more than one, how to store the value: array?, string?
// If using a checkbox, how to track value when box checked/unchecked and how to store value

const BasicCheckBoxes = (props) => { 
  const [checkboxValues, setCheckboxValues] = useState([]);

  const handleChange = (e) => { 

    let newArr = [...checkboxValues];
    // log which checkbox was clicked
    console.log(e.target);


    // if checked, push it to the array
    if(e.target.checked) { 
      newArr.push(e.target.value);
      setCheckboxValues(newArr);
    }

    // if unchecked, remove it from array (don't use pop, b/c user may uncheck after checking other box)
    if(!e.target.checked) { 
      const filteredValues = checkboxValues.filter(v => v !== e.target.value);
      setCheckboxValues(filteredValues);
    }

  }

  const CheckBoxes = checkboxOptions.map((o,i) => (
    <FormControlLabel key={`${o}${i}`}
      control={<Checkbox name='availability' value={o} onChange={handleChange} />} 
      label={o} />
  ));

  useEffect(() => { 
    console.log(checkboxValues);

  },[checkboxValues])

  return (
  <Box sx={{display: 'flex', flexDirection:'column', rowGap:'.5rem'}}>
    <Typography variant='body1' fontSize='1.2rem'>What is your availability for sessions?</Typography>
  <FormGroup sx={{flexDirection:props?.direction}}>
    {CheckBoxes}
    {/* <FormControlLabel control={<Checkbox name='user_availability' />} label='Morning' />
    <FormControlLabel control={<Checkbox name='user_availability' />} label='Afternoon'   />
    <FormControlLabel control={<Checkbox name='user_availability'/>} label='Evening'  /> */}
  </FormGroup>
  </Box>
  
  
  )
}

export default BasicCheckBoxes;
 

