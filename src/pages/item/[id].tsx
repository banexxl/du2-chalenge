import React, { useEffect, useState } from 'react'
import itemDetailsStyles from "./itemdetails.module.scss"
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline'


function ItemDetails() {

          const [loading, setLoading] = useState(false)
          const [data, setData] = useState<any>({});

          const url = window.location.href
          const split = url.split("/")
          const itemId = split[4]

          const dataRating = data.rating

          useEffect(() => {
                    setLoading(true)
                    fetch(`https://fakestoreapi.com/products/${itemId}`)
                              .then(res => res.json())
                              .then(json => setData(json))
                              .catch((error) => {
                                        console.log(error.message);
                              }).finally(() => {
                                        setLoading(false)
                              })

          }, [])


          return (
                    <AppLayout>
                              <Headline title="Item Details" />
                              <div className={itemDetailsStyles.item_details_container}>

                                        <img src={data.image} alt="Item" className={itemDetailsStyles.item_details_image}>
                                        </img>

                                        <div className={itemDetailsStyles.item_details_description_container}>
                                                  <div className={itemDetailsStyles.item_details_description_container_title}>
                                                            {data.title}
                                                  </div>
                                                  <div className={itemDetailsStyles.item_details_description_container_rate}>
                                                            Rating: {dataRating?.rate}
                                                  </div>
                                                  <div className={itemDetailsStyles.item_details_description_container_price}>
                                                            Price: {data.price}$
                                                  </div>
                                                  <div className={itemDetailsStyles.item_details_description_container_description}>
                                                            {data.description}
                                                  </div>
                                                  <div className={itemDetailsStyles.item_details_description_container_cart}>
                                                            Add To car and to wish list
                                                  </div>
                                                  <div className={itemDetailsStyles.item_details_description_container_category}>
                                                            Category: {data.category}
                                                  </div>
                                        </div>
                              </div>
                    </AppLayout>
          )
}

export default ItemDetails
