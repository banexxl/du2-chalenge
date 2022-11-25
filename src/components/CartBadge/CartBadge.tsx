import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./cartbadge.module.css";
import SvgIcon from "components/SvgIcon";
import { cartCounterActions, RootState } from "../../store/index"
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

const CartBadge = () => {

          const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
          const cartCounter = useAppSelector(state => state.cartReducer.cartCounter)
          const dispatch = useDispatch()

          function onClickHandler() {
                    dispatch(cartCounterActions.increment)
          }

          return (
                    <div>
                              <Link to={"/cart"}>
                                        <span className={styles.cart_badge}>
                                                  <SvgIcon type="cart" className={styles.cart_icon} />
                                                  <span className={styles.cart_items_number}>
                                                            {cartCounter}
                                                  </span>
                                        </span>

                              </Link>
                              <button onClick={onClickHandler}>
                                        Add to cart
                              </button>
                    </div>
          );
};

export default memo(CartBadge);
