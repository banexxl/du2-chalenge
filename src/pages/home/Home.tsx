import React, { useEffect, useState } from 'react'
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline';
import { ProductCard } from "../../components/ProductCard"
import { ProductList } from 'components/ProductList';
import { ProductFilterPrice } from "components/ProductFilterPrice"

const Home = (props: any) => {



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
                              <Headline title='Home' />
                              {
                                        loading && (

                                                  < div > Loading...</div>
                                        )
                              }
                              <ProductFilterPrice></ProductFilterPrice>
                              <ProductList >
                                        {
                                                  data.map((product: any, index: number) => (
                                                            <ProductCard key={index} title={truncate(product.title, 4)} price={product.price + "$"} image={product.image}></ProductCard>
                                                  ))
                                        }
                              </ProductList>

                    </AppLayout >
          )
}

export default Home