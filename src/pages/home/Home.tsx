import { useEffect, useState } from 'react'
import Headline from 'components/Headline';
import productContainerStyles from "./product-container.module.scss"
import { AppLayout } from 'components/Layouts'
import { ProductCard } from "./components/ProductCard"
import { ProductList } from './components/ProductList';
import { Link } from 'react-router-dom';
import BaseHttpService from "../../services/product.services"
import { Backdrop, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ProductFilterCategory } from './components/ProductFilterCategory';
import { ProductSort } from './components/ProductSort';
import { ProductListSearch } from './components/ProductListSearch';
import Button from 'components/Button'

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
                              console.log(error.message);

                    }

          }

          //sort
          const onSortValueSelected = (sortType: any) => {
                    console.log(sortType);
                    switch (sortType) {
                              case "price":
                                        const sortedByPrice = data.sort((a: any, b: any) => (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0);
                                        setFilteredValues(sortedByPrice)
                                        break;
                              case "category":
                                        const sortedByCategory = data.sort((a: any, b: any) => (a.category < b.category) ? 1 : (a.category > b.category) ? -1 : 0);
                                        setFilteredValues(sortedByCategory)
                                        break;
                              case "title":
                                        const sortedByTitle = data.sort((a: any, b: any) => (a.title < b.title) ? 1 : (a.title > b.title) ? -1 : 0);
                                        setFilteredValues(sortedByTitle)
                                        break;
                              default:

                                        break;
                    }
                    setFilteredValues([])
          };

          //search
          const onSearchValueSelected = (searchTerm: any) => {
                    const newItem = data.filter((item: any) => {
                              return item.title.toLowerCase().includes(searchTerm)
                    })
                    setFilteredValues(newItem)
          }


          return (
                    <AppLayout>
                              <div className={productContainerStyles.container}>

                                        <div className={productContainerStyles.headline}>
                                                  <Headline title={t('home')} />
                                        </div>
                                        <div className={productContainerStyles.filter_container}>
                                                  <div className={productContainerStyles.filter_category}>
                                                            <ProductFilterCategory filterValueSelected={onFilterValueSelected} />
                                                  </div>
                                                  <div className={productContainerStyles.sort}>
                                                            <ProductSort sortValueSelected={onSortValueSelected} />
                                                  </div>
                                                  <div className={productContainerStyles.search}>
                                                            <ProductListSearch searchValueSelected={onSearchValueSelected} />
                                                  </div>
                                                  <Button style={{ maxWidth: '150px' }} onClick={() => setFilteredValues(data)}>{t("clear_filters")}</Button>
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
                                                                                          filteredValues?.length === 0 ?
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