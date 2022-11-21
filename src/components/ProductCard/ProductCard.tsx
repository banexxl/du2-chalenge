import React from 'react'
import productCardStyle from "./productcard.module.scss"
import Container from 'components/Container'
import { ProductList } from 'components/ProductList'


function ProductCard(product: any) {
          return (
                    <ProductList className={productCardStyle.card_box} >
                              <img src={product.image} alt="img" className={productCardStyle.image}>

                              </img>
                              <div className={productCardStyle.product_title}>
                                        {product.title}
                              </div>
                              <div className={productCardStyle.product_price}>
                                        {product.price}
                              </div>
                              <button className={productCardStyle.add_to_cart}>
                                        Add to cart
                              </button>
                    </ProductList>
          )
}

export default ProductCard