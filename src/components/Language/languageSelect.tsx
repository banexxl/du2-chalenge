import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
          return (
                    <Box style={{ width: "55px" }}>
                              <FormControl >
                                        <NativeSelect
                                                  defaultValue={30}
                                                  inputProps={{
                                                            name: 'language',
                                                            id: 'uncontrolled-native',
                                                  }}

                                        >
                                                  <option value={10}>EN</option>
                                                  <option value={20}>RS</option>
                                        </NativeSelect>
                              </FormControl>
                    </Box>
          );
}
