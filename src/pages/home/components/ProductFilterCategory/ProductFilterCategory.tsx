import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ProductFilterCategory(props: any) {

          const onFilterValueChanged = (event: any) => {
                    props.filterValueSelected(event.target.value)
          }

          return (

                    <FormControl sx={{ minWidth: 120 }}>
                              <InputLabel id="demo-simple-select-autowidth-label">Categories</InputLabel>
                              <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        autoWidth
                                        label="Categories"
                                        onChange={onFilterValueChanged}
                                        defaultValue={""}
                              >

                                        <MenuItem divider={true} value={"men's clothing"}>Men's clothing</MenuItem>
                                        <MenuItem divider={true} value={"electronics"} >Electronics</MenuItem>
                                        <MenuItem divider={true} value={"women's clothing"} >Women's clothing</MenuItem>
                                        <MenuItem divider={true} value={"jewelery"} >Jewelery</MenuItem>
                              </Select>
                    </FormControl>

          );
};


