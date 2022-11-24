import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ProductListSort() {


          const [value, setValue] = React.useState('');

          const handleChange = (event: SelectChangeEvent) => {
                    setValue(event.target.value);
          };

          return (
                    <div>
                              <FormControl sx={{ m: 1, minWidth: 80 }}>
                                        <InputLabel id="demo-simple-select-autowidth-label">Sort</InputLabel>
                                        <Select
                                                  labelId="demo-simple-select-autowidth-label"
                                                  id="demo-simple-select-autowidth"
                                                  value={value}
                                                  onChange={handleChange}
                                                  autoWidth
                                                  label="Sort"
                                        >
                                                  <MenuItem value="">
                                                            <em>None</em>
                                                  </MenuItem>
                                                  <MenuItem value={10}>Category</MenuItem>
                                                  <MenuItem value={21}>Price</MenuItem>
                                                  <MenuItem value={22}>Rating</MenuItem>
                                        </Select>
                              </FormControl>
                    </div>
          );
}
