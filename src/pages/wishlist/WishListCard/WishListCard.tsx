import wishListCardStyle from "./wishlistcard.module.scss"
import { removeFromWishList } from "../../../store/wishListSlice"
import { useDispatch } from "react-redux"
import Button from "components/Button";
import { Link } from "react-router-dom";
import { t } from "i18next";


function ProductCard(product: any) {

          const dispatch = useDispatch()

          return (
                    <div className={wishListCardStyle.card_box}>
                              <Link to={`/item/${product.id}`}>
                                        <img src={product.image} alt="img" className={wishListCardStyle.image}>
                                        </img>
                              </Link>
                              <div className={wishListCardStyle.product_title}>
                                        {product.title}
                              </div>
                              <Button className={wishListCardStyle.remove_from_wishlist} onClick={() => dispatch(removeFromWishList(product))}>
                                        {t("remove_from_wishlist")}
                              </Button>
                    </div>
          )
}

export default ProductCard