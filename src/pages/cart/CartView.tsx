import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./cart.module.css";
import CartItem from "./components/CartItem";
import CartTotals from "./components/CartTotals";
import Button from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "store/cartSlice";

const CartView = () => {

          const cart = useSelector((state: any) => state.cart)
          const dispatch = useDispatch();

          console.log(cart);


          return (
                    <AppLayout>
                              <Headline title="Cart" />
                              <div className={styles.cartPage}>
                                        <div className={styles.cartItems}>
                                                  {
                                                            cart?.map((cartItem: any) => {
                                                                      return (

                                                                                <CartItem key={cartItem.id} id={cartItem.id} image={cartItem.image} price={cartItem.price} quantity={cartItem.quantity} title={cartItem.title} removeHandler={() => dispatch(decrement(cartItem.id))} />
                                                                      )

                                                            })
                                                  }

                                        </div>
                                        <div className={styles.cartTotalWrapp}>
                                                  <CartTotals />
                                                  <Button className={styles.proceedBtn}>Proceed to Checkout</Button>
                                        </div>
                              </div>
                    </AppLayout>
          );
};

export default CartView;
