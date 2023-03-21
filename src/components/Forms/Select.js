import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const sources = ['Instagram', 'Google', '3rd Source', '4th Source'];

// const MenuItems = sources.map((source, i) => (
//   <MenuItem value={source} key={source} name="user_source">
//     {source}{' '}
//   </MenuItem>
// ));

const BasicSelect = () => {
  const [source, setSource] = useState('');

  const handleChange = (e) => {
    setSource(e.target.value);
  };

  return (
    <Box sx={{ maxWidth: '22rem', gridColumn: '1' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          How did you hear about us?
        </InputLabel>

        <Select
          labelId="source-lead"
          id="source-lead-select"
          value={source}
          onChange={handleChange}
          name="source"
        >
          {sources.map((s, i) => (
            <MenuItem value={s}  key={source} >
              {s}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
