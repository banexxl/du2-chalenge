import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ProductSort(props: any) {

          const onSortValueChanged = (event: any) => {
                    console.log(event.target.value);
                    props.sortValueSelected(event.target.value)
          }

          return (

                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                              <InputLabel id="demo-simple-select-autowidth-label">Sort</InputLabel>
                              <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        autoWidth
                                        label="Sort"
                                        onChange={onSortValueChanged}
                                        defaultValue={""}
                              >
                                        <MenuItem divider={true} value={"category"}>Category</MenuItem>
                                        <MenuItem divider={true} value={"price"} >Price</MenuItem>
                                        <MenuItem divider={true} value={"title"} >Title</MenuItem>
                              </Select>
                    </FormControl>

          );
};


