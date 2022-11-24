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

const Home = () => {



          const [loading, setLoading] = useState(false)
          const [data, setData] = useState([])

          function truncate(str: string, word_count: number) {
                    return str.split(" ").splice(0, word_count).join(" ");
          }


          useEffect(() => {
                    setLoading(true)
                    fetch('https://fakestoreapi.com/products')
                              .then(res => res.json())
                              .then(json => setData(json))
                              .catch((error) => {
                                        console.log(error.message);
                              }).finally(() => {
                                        setLoading(false)
                              })

          }, [])

          console.log(data);


          return (
                    <AppLayout>
                              <div className={productContainerStyles.container}>
                                        <div className={productContainerStyles.headline}>

                                                  <Headline title='Home' />
                                                  {
                                                            loading && (

                                                                      < div > Loading...</div>
                                                            )
                                                  }
                                        </div>
                                        <div className={productContainerStyles.filter_container}>

                                                  <div className={productContainerStyles.filter_price}>

                                                            <ProductFilterPrice ></ProductFilterPrice>
                                                  </div>

                                                  <div>
                                                            <ProductFilterCategory></ProductFilterCategory>
                                                  </div>
                                                  <div>
                                                            <ProductListSort></ProductListSort>
                                                  </div>
                                                  <div>
                                                            <ProductListSearch></ProductListSearch>
                                                  </div>
                                        </div>
                                        <div className={productContainerStyles.product_list}>

                                                  <ProductList >
                                                            {
                                                                      data.map((product: any, index: number) => (


                                                                                <ProductCard key={index} title={truncate(product.title, 4)} price={product.price + "$"} image={product.image} id={product.id} rating={product.rating.rate}>
                                                                                          <Link to={product.id}></Link>
                                                                                </ProductCard>
                                                                      ))
                                                            }
                                                  </ProductList>
                                        </div>
                              </div>
                    </AppLayout >
          )
}

export default Home