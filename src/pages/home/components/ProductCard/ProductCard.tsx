import productCardStyle from "./productcard.module.scss"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { addToCart } from "../../../../store/cartSlice"
import { useDispatch } from "react-redux"
import Button from "components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Alert } from "@mui/material";
import { useTranslation } from "react-i18next";


function ProductCard(product: any) {

          const dispatch = useDispatch()

          const [addToCartAlert, setAddToCartAlert] = useState(false)

          const { t } = useTranslation();

          const onClickHandler = () => {
                    dispatch(addToCart(product))
                    setAddToCartAlert(true)
                    setTimeout(() => {
                              setAddToCartAlert(false)
                    }, 2000);

          }

          return (
                    <div className={productCardStyle.card_box}>
                              {
                                        addToCartAlert ?
                                                  <Alert variant="filled" severity="success" style={{ position: 'absolute', top: '0px' }}>
                                                            Successfully added to cart!
                                                  </Alert>
                                                  :
                                                  null
                              }
                              <Link to={`/item/${product.id}`}>
                                        <img src={product.image} alt="img" className={productCardStyle.image}>
                                        </img>
                              </Link>
                              <div className={productCardStyle.product_title}>
                                        {product.title}
                              </div>
                              <div className={productCardStyle.product_price}>
                                        {product.price}
                              </div>
                              <div>
                                        <Rating
                                                  name="hover-feedback"
                                                  value={product.rating}
                                                  precision={0.1}
                                                  readOnly
                                                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                              </div>
                              <Button className={productCardStyle.add_to_cart} onClick={onClickHandler}>
                                        {t("add_to_cart")}
                              </Button>
                    </div >
          )
}

export default ProductCard