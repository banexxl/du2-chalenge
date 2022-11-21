import React, { useEffect, useState } from 'react'
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline';
import { ProductCard } from "../../components/ProductCard"

const Home = (props: any) => {



          const [loading, setLoading] = useState(false)
          const [data, setData] = useState([])


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
                              {
                                        data.map((product: any, index: number) => (
                                                  <ProductCard key={index} title={product.title} price={product.price} image={product.image}></ProductCard>
                                        ))
                              }
                    </AppLayout >
          )
}

export default Home