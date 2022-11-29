
import { FC } from "react";
import styles from './quantitybutton.module.scss';
import { increment, decrement } from "../../store/cartSlice"
import { useDispatch } from "react-redux"
import Button from "components/Button";

interface IProps {
          id: number;
          quantity: number;
          cb?: (operation: 'plus' | 'minus') => void;
}

const QuantityButton: FC<IProps> = ({ id, quantity, cb }) => {

          const dispatch = useDispatch()

          return (
                    <div className={styles.quantity}>
                              <Button className={`${styles.quantity_button} ${styles.quantity_button_minus}`} style={{ display: quantity === 1 || quantity === 0 ? 'none' : 'flex' }} onClick={() => dispatch(decrement(id))}>-</Button>
                              <input
                                        readOnly
                                        type="text"
                                        className={styles.quantity_input}
                                        step="1"
                                        min="1"
                                        max=""
                                        name="quantity"
                                        value={quantity}
                                        title="Qty"
                                        size={2}
                                        inputMode="numeric"
                              />
                              <Button className={styles.quantity_button} onClick={() => dispatch(increment(id))}>+</Button>
                    </div >
          );
};

export default QuantityButton;
