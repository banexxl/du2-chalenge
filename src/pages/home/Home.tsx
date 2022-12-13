import React, { useEffect, useMemo, useState } from 'react'
import Headline from 'components/Headline';
import productContainerStyles from "./product-container.module.scss"
import { AppLayout } from 'components/Layouts'
import { ProductCard } from "./components/ProductCard"
import { ProductList } from './components/ProductList';
import { Link } from 'react-router-dom';
import BaseHttpService from "../../services/product.services"
import { Backdrop, Box, CircularProgress, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ProductFilterCategory } from './components/ProductFilterCategory';
import Button from 'components/Button';
import { ProductSort } from './components/ProductSort';

const Home = () => {

          const [data, setData] = useState([])
          const basehttpservice = BaseHttpService
          const [openBackdrop, setOpenBackdrop] = useState(false);
          const { t } = useTranslation();

          function truncate(str: string, word_count: number) {
                    return str.split(" ").splice(0, word_count).join(" ");
          }

          const getAllItems = () => {
                    basehttpservice.getAll().then((data: any) => {
                              setOpenBackdrop(false)
                              setData(data)
                              return data
                    })
          }
          console.log("data: ", data);

          useEffect(() => {
                    setOpenBackdrop(true)
                    getAllItems()
          }, [])


          const [filteredValues, setFilteredValues] = useState([])

          //filter
          const onFilterValueSelected = (category: string) => {
                    const filterArray: any = []
                    try {
                              data ?
                                        data.forEach((element: any) => {
                                                  if (element.category === category) {
                                                            filterArray.push(element)
                                                            setFilteredValues(filterArray)
                                                  } else {
                                                            return null
                                                  }
                                        })
                                        :
                                        filteredValues?.forEach((element: any) => {
                                                  if (element.category === category) {
                                                            filterArray.push(element)
                                                            setFilteredValues(filterArray)
                                                  } else {
                                                            return null
                                                  }
                                        })
                    } catch (error: any) {
                              alert(error.message);

                    }

          }

          //sort
          const onSortValueSelected = (sortType: any) => {
                    switch (sortType) {
                              case "price":
                                        const sortedByPrice = filteredValues.sort((a: any, b: any) => (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0);
                                        setFilteredValues(sortedByPrice)
                                        break;
                              case "category":
                                        const sortedByCategory = filteredValues.sort((a: any, b: any) => (a.category < b.category) ? 1 : (a.category > b.category) ? -1 : 0);
                                        setFilteredValues(sortedByCategory)
                                        break;
                              case "title":
                                        const sortedByTitle = filteredValues.sort((a: any, b: any) => (a.title < b.title) ? 1 : (a.title > b.title) ? -1 : 0);
                                        setFilteredValues(sortedByTitle)
                                        break;
                              default:
                                        break;
                    }
          };

          console.log("filteredvalues ", filteredValues);


          return (
                    <AppLayout>
                              <div className={productContainerStyles.container}>

                                        <div className={productContainerStyles.headline}>
                                                  <Headline title={t('home')} />
                                        </div>
                                        <Button onClick={getAllItems}>Reset</Button>
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
                                                            <ProductFilterCategory filterValueSelected={onFilterValueSelected} data={data} />
                                                  </div>
                                                  <div className={productContainerStyles.sort}>
                                                            <ProductSort sortValueSelected={onSortValueSelected} ></ProductSort>
                                                  </div>
                                                  {/* <div className={productContainerStyles.search}>
                                                            <Box
                                                                      component="form"
                                                                      sx={{
                                                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                      }}
                                                                      noValidate
                                                                      autoComplete="off"
                                                            >
                                                                      <div>
                                                                                <TextField id="outlined-search" label="Search field" type="search" onChange={(e) => setSearchTerm(e.target.value)} />
                                                                      </div>

                                                            </Box>
                                                  </div> */}
                                        </div>
                                        <div className={productContainerStyles.product_list}>
                                                  {
                                                            data.length === 0 ?
                                                                      <Backdrop
                                                                                sx={{ color: '#fff', zIndex: "100" }}
                                                                                open={openBackdrop}
                                                                      >
                                                                                <CircularProgress style={{ color: "black" }} />
                                                                      </Backdrop>
                                                                      :
                                                                      <ProductList>
                                                                                {
                                                                                          filteredValues.length === 0 ?
                                                                                                    data.map((product: any, index: number) => (
                                                                                                              <ProductCard key={index} title={truncate(product.title, 4)} price={product.price + "$"} image={product.image} id={product.id} rating={product.rating.rate}>
                                                                                                                        <Link to={product.id}></Link>
                                                                                                              </ProductCard>
                                                                                                    ))
                                                                                                    :
                                                                                                    filteredValues.map((product: any, index: number) => (
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