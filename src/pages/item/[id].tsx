import React, { useEffect, useState } from 'react'
import itemDetailsStyles from "./itemdetails.module.scss"
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline'
import Button from 'components/Button'
import WishlistBadge from 'components/Badges/WishlistBadge'
import WishlistBadgeListed from "components/Badges/WishlistBadgeListed"
import ProducServices from "../../services/product.services"
import { addToCart } from "../../store/cartSlice"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addToWishList, checkItemInList, removeFromWishList } from "../../store/wishListSlice"


function ItemDetails() {

          const params: any = useParams()
          const [loading, setLoading] = useState(true)
          const [data, setData] = useState<any>({});
          const productServices = ProducServices
          const dataRating = data.rating

          const getProduct = () => {

                    productServices.getById(params.itemId)
                              .then((data: any) => {
                                        setData(data)
                                        setLoading(false)
                                        return data
                              }).then()
          }

          useEffect(() => {
                    setLoading(true)
                    getProduct()
          }, [])

          const dispatch = useDispatch()

          let itemCheck = checkItemInList(data)
          console.log(itemCheck);

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
                                                            {
                                                                      loading === true ? <p>Loading...</p> :
                                                                                <Button onClick={() => {
                                                                                          dispatch(addToCart(data))
                                                                                }}>Add to cart</Button>
                                                            }
                                                            {
                                                                      checkItemInList(data) ?
                                                                                <div onClick={() => dispatch(addToWishList(data))}>
                                                                                          <WishlistBadge />
                                                                                </div>
                                                                                :
                                                                                <div onClick={() => dispatch(removeFromWishList(data))}>
                                                                                          <WishlistBadgeListed />
                                                                                </div>

                                                            }


                                                  </div>
                                                  <div className={itemDetailsStyles.item_details_description_container_category}>
                                                            Category: {data.category}
                                                  </div>
                                        </div>
                              </div>
                    </AppLayout >
          )
}

export default ItemDetails
