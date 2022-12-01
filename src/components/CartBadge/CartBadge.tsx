import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./cartbadge.module.scss";
import SvgIcon from "components/SvgIcon";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../store/selectors";

const CartBadge = () => {

          const cartCounter: any = useSelector(cartTotalSelector)

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
                    </div>
          );
};

export default memo(CartBadge);
