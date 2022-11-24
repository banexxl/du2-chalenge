import React, { useEffect, useState } from 'react'
import itemDetailsStyles from "./itemdetails.module.scss"
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline'


function ItemDetails() {

          const [loading, setLoading] = useState(false)
          const [data, setData] = useState([])



          useEffect(() => {
                    setLoading(true)
                    fetch('https://fakestoreapi.com/products/1')
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
                              <Headline title="Item Details" />
                              <div className={itemDetailsStyles.item_details_container}>
                                        <div className={itemDetailsStyles.item_details_image}>
                                                  <img></img>
                                        </div>

                                        <div className={itemDetailsStyles.item_details_description_container}>
                                                  <div>
                                                            Title
                                                  </div>
                                                  <div>
                                                            Rate
                                                  </div>
                                                  <div>
                                                            Price
                                                  </div>
                                                  <div>
                                                            Description
                                                  </div>
                                                  <div>
                                                            Add To car and to wish list
                                                  </div>
                                                  <div>
                                                            Category
                                                  </div>
                                        </div>
                              </div>
                    </AppLayout>
          )
}

export default ItemDetails
