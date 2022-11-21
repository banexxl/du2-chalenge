import React from 'react'
import productCardStyle from "./productcard.module.scss"
import Container from 'components/Container'


function ProductCard(product: any) {
          return (
                    <Container>
                              <img src={product.image} alt="img" className={productCardStyle.image}>

                              </img>
                              <div className={productCardStyle.product_title}>
                                        {product.title}
                              </div>
                              <div className={productCardStyle.product_price}>
                                        {product.price}
                              </div>
                    </Container>
          )
}

export default ProductCard