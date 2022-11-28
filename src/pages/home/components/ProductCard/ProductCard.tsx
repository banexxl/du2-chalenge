import productCardStyle from "./productcard.module.scss"
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { addToCart, increment } from "../../../../store/cartSlice"
import { useDispatch } from "react-redux"
import Button from "components/Button";


function ProductCard(product: any) {

          const labels: { [index: string]: string } = {
                    0.5: 'Useless',
                    1: 'Useless+',
                    1.5: 'Poor',
                    2: 'Poor+',
                    2.5: 'Ok',
                    3: 'Ok+',
                    3.5: 'Good',
                    4: 'Good+',
                    4.5: 'Excellent',
                    5: 'Excellent+',
          };


          function getLabelText(value: number) {
                    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
          }

          const dispatch = useDispatch()

          return (
                    <div className={productCardStyle.card_box}>
                              <a href={`/item/${product.id}`}>
                                        <img src={product.image} alt="img" className={productCardStyle.image}>
                                        </img>
                              </a>
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
                                                  precision={0.5}
                                                  readOnly
                                                  getLabelText={getLabelText}
                                                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {product.rating !== null && (
                                                  <Box sx={{ ml: 2 }}>{labels[product.rating]}</Box>
                                        )}
                              </div>
                              <Button className={productCardStyle.add_to_cart} onClick={() => dispatch(addToCart(product.id))}>
                                        Add to cart
                              </Button>
                    </div>
          )
}

export default ProductCard