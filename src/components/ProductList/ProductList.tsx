import React from 'react'
import productListStyles from "./productlist.module.scss"

function ProductList(props: any) {
          return (
                    <div className={productListStyles.product_list}>


                              {props.children}

                    </ div>
          )
}

export default ProductList