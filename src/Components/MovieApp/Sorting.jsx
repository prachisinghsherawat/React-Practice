
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Sorting({sortFilter}) {

  return (
    <div>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Movie </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Movie"
          onChange={sortFilter}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"asc"}>Ascending</MenuItem>
          <MenuItem value={"desc"}>Decending</MenuItem>
        </Select>
        
      </FormControl>
      

    </div>
  );
}
