import productCardStyle from "./productcard.module.scss"
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


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

          const rateObj = product.rating


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
                                                  value={rateObj}
                                                  precision={0.5}
                                                  readOnly
                                                  getLabelText={getLabelText}
                                                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {rateObj !== null && (
                                                  <Box sx={{ ml: 2 }}>{labels[rateObj]}</Box>
                                        )}
                              </div>
                              <button className={productCardStyle.add_to_cart}>
                                        Add to cart
                              </button>
                    </div>
          )
}

export default ProductCard