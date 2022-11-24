import { Rating } from '../Rating'
import React from 'react'
import productCardStyle from "./productcard.module.scss"
import { Link } from 'react-router-dom'


function ProductCard(product: any) {
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
                                        <Rating></Rating>
                              </div>
                              <button className={productCardStyle.add_to_cart}>
                                        Add to cart
                              </button>
                    </div>
          )
}

export default ProductCard