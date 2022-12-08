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
import { addToWishList, removeFromWishList } from "../../store/wishListSlice"
import Alert from '@mui/material/Alert';
import { Backdrop, CircularProgress } from '@mui/material'

function ItemDetails() {

          const params: any = useParams()
          const [data, setData] = useState<any>({});
          const [inWishList, setInWishList] = useState(false)
          const [alertAdd, setAlertAdd] = useState(false)
          const [alertRemove, setAlertRemove] = useState(false)
          const productServices = ProducServices
          const dataRating = data.rating
          const [openBackdrop, setOpenBackdrop] = useState(false);

          const getProduct = () => {

                    productServices.getById(params.itemId)
                              .then((data: any) => {
                                        setData(data)
                                        setOpenBackdrop(false)
                                        return data
                              }).then()
          }

          useEffect(() => {
                    setOpenBackdrop(true)
                    getProduct()
          }, [])

          const dispatch = useDispatch()

          const addToWL = () => {
                    dispatch(addToWishList(data))
                    setInWishList(true)
                    setAlertAdd(true)
                    setTimeout(() => {
                              setAlertAdd(false)
                    }, 2000);
                    setAlertRemove(false)
          }

          const removeFromWL = () => {
                    dispatch(removeFromWishList(data))
                    setInWishList(false)
                    setAlertRemove(true)
                    setTimeout(() => {
                              setAlertRemove(false)
                    }, 2000);
                    setAlertAdd(false)
          }

          return (
                    <AppLayout>
                              <Headline title="Item Details" />
                              <div className={itemDetailsStyles.item_details_container}>
                                        {
                                                  alertAdd ?
                                                            <Alert variant="filled" severity="success" className={itemDetailsStyles.alert}>
                                                                      Item added to wishlist!
                                                            </Alert>
                                                            : null
                                        }
                                        {
                                                  alertRemove ?
                                                            <Alert variant="filled" severity="warning" className={itemDetailsStyles.alert}>
                                                                      Item removed from wishlist!
                                                            </Alert>
                                                            : null
                                        }

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
                                                  {/* <Trans className={itemDetailsStyles.item_details_description_container_description} i18nKey="userMessagesUnread">
                                                            {t(data.description)}
                                                  </Trans> */}
                                                  <div className={itemDetailsStyles.item_details_description_container_cart}>
                                                            {
                                                                      openBackdrop === true ?
                                                                                <Backdrop
                                                                                          sx={{ color: '#fff', zIndex: "100" }}
                                                                                          open={openBackdrop}
                                                                                >
                                                                                          <CircularProgress style={{ color: "black" }} />
                                                                                </Backdrop>
                                                                                :
                                                                                <Button onClick={() => {
                                                                                          dispatch(addToCart(data))
                                                                                }}>Add to cart</Button>
                                                            }
                                                            {
                                                                      !inWishList ?
                                                                                <div onClick={addToWL}>
                                                                                          <WishlistBadge />
                                                                                </div>
                                                                                :
                                                                                <div onClick={removeFromWL}>
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
