import React, { useEffect, useState } from 'react'
import Headline from 'components/Headline';
import productContainerStyles from "./product-container.module.scss"
import { AppLayout } from 'components/Layouts'
import { ProductCard } from "./components/ProductCard"
import { ProductList } from './components/ProductList';
import { ProductFilterPrice } from "./components/ProductFilterPrice"
import { ProductFilterCategory } from "./components/ProductFilterCategory"
import { ProductListSort } from "./components/ProductListSort"
import { ProductListSearch } from "./components/ProductListSearch"
import { Link } from 'react-router-dom';
import BaseHttpService from "../../services/product.services"
import { Backdrop, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

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

          //filter
          const filterItem = (category: any) => {
                    const newItem = data.filter((newVal: any) => {
                              return newVal.category === category;
                    });
                    setFilteredItems(newItem);
          };
          console.log(filterItem);

          //sort

          return (
                    <AppLayout>
                              <div className={productContainerStyles.container}>
                                        <div className={productContainerStyles.headline}>

                                                  <Headline title='Home' />
                                        </div>
                                        <div className={productContainerStyles.filter_container}>

                                                  <div className={productContainerStyles.filter_price}>

                                                            <ProductFilterPrice></ProductFilterPrice>
                                                  </div>

                                                  <div>
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
                                                                      </RadioGroup>
                                                            </FormControl>
                                                  </div>
                                                  <div>
                                                            <ProductListSort></ProductListSort>
                                                  </div>
                                                  <div>
                                                            <ProductListSearch></ProductListSearch>
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