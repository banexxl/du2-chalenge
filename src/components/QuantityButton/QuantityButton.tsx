
import { FC } from "react";
import styles from './quantitybutton.module.css';
import { increment, decrement } from "../../store/cartSlice"
import { useDispatch } from "react-redux"

interface IProps {
          id: number;
          quantity: number;
          cb?: (operation: 'plus' | 'minus') => void;
}

const QuantityButton: FC<IProps> = ({ id, quantity, cb }) => {

          const dispatch = useDispatch()

          return (
                    <div className={styles.quantity}>
                              <span className={`${styles.quantity_button} ${styles.quantity_button_minus}`} onClick={() => dispatch(decrement(id))}>-</span>
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
                              <span className={styles.quantity_button} onClick={() => dispatch(increment(id))}>+</span>
                    </div>
          );
};

export default QuantityButton;
