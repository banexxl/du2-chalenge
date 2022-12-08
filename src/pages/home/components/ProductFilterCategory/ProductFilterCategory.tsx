import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

export default function ProductFilterCategory() {

          //za filtriranje
          const [items, setItems] = useState();

          const filterItems = (filterTerm: string, data: any) => {
                    const newItems = data.filter((newVal: any) => {
                              return newVal.category === filterTerm
                    })
                    setItems(newItems)
          }


          return (
                    <FormControl>
                              <FormLabel id="demo-row-radio-buttons-group-label">Product Categories</FormLabel>
                              <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                              >
                                        <FormControlLabel value="female" control={<Radio />} label="Women's clothing" onClick={() => filterItems} />
                                        <FormControlLabel value="male" control={<Radio />} label="Men's clothing" onClick={() => filterItems} />
                                        <FormControlLabel value="electronics" control={<Radio />} label="Electronics" onClick={() => filterItems} />
                                        <FormControlLabel value="jewelry" control={<Radio />} label="Jewelry" onClick={() => filterItems} />
                              </RadioGroup>
                    </FormControl>
          );
}
