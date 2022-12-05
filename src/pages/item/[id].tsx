import React, { useEffect, useState } from 'react'
import itemDetailsStyles from "./itemdetails.module.scss"
import { AppLayout } from 'components/Layouts'
import Headline from 'components/Headline'
import Button from 'components/Button'
import WishlistBadge from 'components/Badges/WishlistBadge'
import ProducServices from "../../services/product.services"
import { addToCart } from "../../store/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addToWishList } from "../../store/wishListSlice"
import { wishListItemsSelector } from "../../store/selectors"
function ItemDetails() {

          const params: any = useParams()
          const [loading, setLoading] = useState(true)
          const [data, setData] = useState<any>({});
          const productServices = ProducServices
          const dataRating = data.rating

          const wishListCounter: any = useSelector(wishListItemsSelector)

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

          console.log(wishListCounter);


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
                                                            <div onClick={() => dispatch(addToWishList(data))}>
                                                                      <WishlistBadge />
                                                            </div>
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
