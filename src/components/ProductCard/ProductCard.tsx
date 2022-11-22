import { Rating } from 'components/Rating'
import React from 'react'
import productCardStyle from "./productcard.module.scss"


function ProductCard(product: any) {
          return (
                    <div className={productCardStyle.card_box}>
                              <img src={product.image} alt="img" className={productCardStyle.image}>

                              </img>
                              <div className={productCardStyle.product_title}>
                                        {product.title}
                              </div>
                              <div className={productCardStyle.product_price}>
                                        {product.price}
                              </div>
                              <div>
                                        <Rating></Rating>
                              </div>
                              <button className={productCardStyle.add_to_cart}>
                                        Add to cart
                              </button>
                    </div>
          )
}

export default ProductCard