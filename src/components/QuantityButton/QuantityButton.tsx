
import { FC, useContext } from "react";
import styles from './quantitybutton.module.css';

interface IProps {
          id: number;
          quantity: number;
          cb?: (operation: 'plus' | 'minus') => void;
}

const QuantityButton: FC<IProps> = ({ id, quantity = 1, cb }) => {

          return (
                    <div className={styles.quantity}>
                              <span

                                        className={`${styles.quantity_button} ${styles.quantity_button_minus}`}>
                                        -</span>
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
                              <span className={styles.quantity_button}>+</span>
                    </div>
          );
};

export default QuantityButton;
