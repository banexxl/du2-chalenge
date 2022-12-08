import React, { useEffect, useState } from 'react'
import Headline from 'components/Headline';
import productContainerStyles from "./product-container.module.scss"
import { AppLayout } from 'components/Layouts'
import { ProductCard } from "./components/ProductCard"
import { ProductList } from './components/ProductList';
import { Link } from 'react-router-dom';
import BaseHttpService from "../../services/product.services"
import { Backdrop, Box, CircularProgress, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, TextField } from '@mui/material';

const Home = () => {

          const [data, setData] = useState([])
          const basehttpservice = BaseHttpService
          const [openBackdrop, setOpenBackdrop] = useState(false);
          const [filteredItems, setFilteredItems] = useState(data)
          function truncate(str: string, word_count: number) {
                    return str.split(" ").splice(0, word_count).join(" ");
          }

          useEffect(() => {
                    setOpenBackdrop(true)
                    basehttpservice.getAll().then((data: any) => {
                              setOpenBackdrop(true)
                              setData(data)
                              setFilteredItems(data)
                    })

          }, [])

          console.log(data);


          //filter
          const filterItem = (category: any) => {

                    const newItem = data.filter((newVal: any) => {
                              return newVal.category === category;
                    });
                    setFilteredItems(newItem);
          };
          //sort
          // const sortItem = (srtType: any) => {
          //           const newItem = data.sort((newVal: any) => {
          //                     return newVal.category === category;
          //           });
          //           setFilteredItems(newItem);
          // };
          const valuea = ""
          const handleChange = () => {

          }
          const valuetexta = () => {

          }
          const [value, setValue] = React.useState<number[]>([20, 37]);

          const handleChangea = (event: Event, newValue: number | number[]) => {
                    setValue(newValue as number[]);
          };

          return (
                    <AppLayout>
                              <div className={productContainerStyles.container}>
                                        <div className={productContainerStyles.headline}>

                                                  <Headline title='Home' />
                                        </div>
                                        <div className={productContainerStyles.filter_container}>

                                                  <div className={productContainerStyles.filter_price}>
                                                            {/* <Box sx={{ width: 150 }} >
                                                                      <h2>
                                                                                Filter by price:
                                                                      </h2>
                                                                      <Slider
                                                                                getAriaLabel={() => 'Temperature range'}
                                                                                value={value}
                                                                                onChange={handleChangea}
                                                                                size='small'
                                                                                //getAriaValueText={valuetexta}
                                                                                valueLabelDisplay="on"
                                                                                max={1000}
                                                                                step={10}
                                                                      />

                                                            </Box > */}

                                                  </div>
                                                  <div className={productContainerStyles.filter_category}>
                                                            <FormControl>
                                                                      <FormLabel id="demo-row-radio-buttons-group-label">Product Categories</FormLabel>
                                                                      <RadioGroup
                                                                                row
                                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                                name="row-radio-buttons-group"
                                                                      >
                                                                                <FormControlLabel value="female" control={<Radio />} label="Women's clothing" onClick={() => filterItem("women's clothing")} />
                                                                                <FormControlLabel value="male" control={<Radio />} label="Men's clothing" onClick={() => filterItem("men's clothing")} />
                                                                                <FormControlLabel value="electronics" control={<Radio />} label="Electronics" onClick={() => filterItem("electronics")} />
                                                                                <FormControlLabel value="jewelry" control={<Radio />} label="Jewelry" onClick={() => filterItem("jewelery")} />
                                                                                <FormControlLabel value="all" control={<Radio />} label="All" onClick={() => setFilteredItems(data)} />
                                                                      </RadioGroup>
                                                            </FormControl>
                                                  </div>
                                                  <div className={productContainerStyles.sort}>
                                                            {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
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
                                                            </FormControl> */}
                                                  </div>
                                                  <div className={productContainerStyles.search}>
                                                            {/* <Box
                                                                      component="form"
                                                                      sx={{
                                                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                      }}
                                                                      noValidate
                                                                      autoComplete="off"
                                                            >
                                                                      <div>

                                                                                <TextField id="outlined-search" label="Search field" type="search" />

                                                                      </div>

                                                            </Box> */}
                                                  </div>
                                        </div>
                                        <div className={productContainerStyles.product_list}>
                                                  {
                                                            !data ?
                                                                      <Backdrop
                                                                                sx={{ color: '#fff', zIndex: "100" }}
                                                                                open={openBackdrop}
                                                                      >
                                                                                <CircularProgress style={{ color: "black" }} />
                                                                      </Backdrop>
                                                                      :
                                                                      <ProductList >
                                                                                {
                                                                                          filteredItems.map((product: any, index: number) => (
                                                                                                    <ProductCard key={index} title={truncate(product.title, 4)} price={product.price + "$"} image={product.image} id={product.id} rating={product.rating.rate}>
                                                                                                              <Link to={product.id}></Link>
                                                                                                    </ProductCard>
                                                                                          ))
                                                                                }
                                                                      </ProductList>
                                                  }
                                        </div>
                              </div>
                    </AppLayout >
          )
}

export default Home