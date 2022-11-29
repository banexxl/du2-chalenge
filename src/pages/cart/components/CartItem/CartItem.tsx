import QuantityButton from "components/QuantityButton/QuantityButton";
import SvgIcon from "components/SvgIcon";
import { ICartItem } from "interfaces";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { removeAllSingleItems } from "store/cartSlice";
import { cartTotalPriceSelector } from "../../../../store/selectors";

interface ICartProps extends ICartItem {
          addSingleHandler: (id: number) => void
          removeSingleHandler: (id: number) => void
}

const CartItem = ({
          id,
          title,
          price,
          quantity,
          image,

}: ICartProps) => {

          const dispatch = useDispatch()

          return (
                    <div className={styles.cartItem} style={{ display: quantity === 0 ? 'none' : 'grid' }} >
                              <img className={styles.cartItem_image} src={image} alt={title} />
                              <div className={styles.cartItem_info}>
                                        <p className={styles.cartItem_title}>{title}</p>
                                        <span className={styles.cartItem_priceInfo}>
                                                  {price} x {quantity}
                                        </span>
                              </div>
                              <QuantityButton quantity={quantity} id={id} />
                              <div>sum: ${price * quantity}</div>
                              <span onClick={() => { dispatch(removeAllSingleItems(id)) }} className={styles.remove_all_single_items}>
                                        <SvgIcon type="remove" width={20} height={20} color="#928F8F" />
                              </span>
                    </div>
          );
};

export default CartItem;
