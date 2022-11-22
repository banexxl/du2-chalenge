import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
          return `${value}°C`;
}

export default function ProductFilterPrice() {

          const [value, setValue] = React.useState<number[]>([20, 37]);

          const handleChange = (event: Event, newValue: number | number[]) => {
                    setValue(newValue as number[]);
          };

          return (
                    <Box sx={{ width: 150 }} >
                              <h2>
                                        Filter by price:
                              </h2>
                              <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        size='small'
                                        getAriaValueText={valuetext}
                                        valueLabelDisplay="on"
                                        max={1000}
                                        step={10}
                              />

                    </Box >
          );
}
