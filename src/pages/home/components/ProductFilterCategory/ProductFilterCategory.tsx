import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ProductFilterCategory() {
          return (
                    <FormControl>
                              <FormLabel id="demo-row-radio-buttons-group-label">Product Categories</FormLabel>
                              <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                              >
                                        <FormControlLabel value="female" control={<Radio />} label="Women's clothing" />
                                        <FormControlLabel value="male" control={<Radio />} label="Men's clothing" />
                                        <FormControlLabel value="electronics" control={<Radio />} label="Electronics" />
                                        <FormControlLabel value="jewelry" control={<Radio />} label="Jewelry" />
                              </RadioGroup>
                    </FormControl>
          );
}
