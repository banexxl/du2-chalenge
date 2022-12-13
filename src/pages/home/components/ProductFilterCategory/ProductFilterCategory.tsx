import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ProductFilterCategory(props: any) {

          const onFilterValueChanged = (event: any) => {
                    console.log(event.target.value);
                    props.filterValueSelected(event.target.value)
          }

          return (

                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                              <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
                              <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        autoWidth
                                        label="Filter"
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


