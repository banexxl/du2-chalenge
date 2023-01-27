import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./cart.module.scss";
import CartItem from "./components/CartItem";
import CartTotals from "./components/CartTotals";
import Button from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { increment, clearCart, decrement } from "store/cartSlice";
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const CartView = () => {

          const cart = useSelector((state: any) => state.cart)
          const dispatch = useDispatch();
          const { t } = useTranslation();

          console.log("cart: " + cart);

          return (
                    <AppLayout>
                              <Headline title={t("cart")} />
                              <Button className={styles.button_clear_all} onClick={() => dispatch(clearCart())}>{t("clear_cart")}</Button>
                              <div className={styles.cartPage}>

                                        <div className={styles.cartItems}>
                                                  {
                                                            cart.map((cartItem: any, index: number) => {
                                                                      return (
                                                                                <CartItem key={index} id={cartItem.id}
                                                                                          image={cartItem.image} price={parseFloat(cartItem.price)}
                                                                                          quantity={cartItem.quantity} title={cartItem.title}
                                                                                          addSingleHandler={() => { dispatch(increment(cartItem.id)) }}
                                                                                          removeSingleHandler={() => dispatch(decrement(cartItem.id))}
                                                                                />
                                                                      )

                                                            })
                                                  }
                                        </div>
                                        <div className={styles.cartTotalWrapp}>
                                                  <CartTotals />
                                                  <Link to={"/checkout"}>
                                                            <Button className={styles.proceedBtn}>{t("checkout")}</Button>
                                                  </Link>
                                        </div>
                              </div>
                    </AppLayout >
          );
};

export default CartView;

