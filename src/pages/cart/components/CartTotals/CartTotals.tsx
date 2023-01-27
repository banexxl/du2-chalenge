
import React, { memo } from "react";
import styles from "./styles.module.css";
import { cartTotalPriceSelector } from "../../../../store/selectors"
import { useSelector } from "react-redux";
import { t } from "i18next";

const CartTotals = () => {


          const totalItemPrice: any = useSelector(cartTotalPriceSelector)

          const shippingFee: number = 19.99

          const flatRate: number = 9.99

          return (
                    <div className={styles.cartTotal}>
                              <div className={styles.title_head}>
                                        <h4 className={styles.title_head}>{t("cart_totals")}:</h4>
                                        <table>
                                                  <thead>
                                                            <tr>
                                                                      <th className={styles.subtotal_title}>{t('subtotal')}:</th>
                                                                      <th>${parseFloat(totalItemPrice).toFixed(2)}</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody className={styles.table_body}>
                                                            <tr>
                                                                      <td className={styles.title_head}>{t('shipping')}:</td>
                                                                      <td className={styles.table_value}>${shippingFee}</td>
                                                            </tr>
                                                            <tr>
                                                                      <td className={styles.title_head}>{t('flat_rate')}:</td>
                                                                      <td className={styles.table_value}>${flatRate}</td>
                                                            </tr>
                                                  </tbody>
                                        </table>
                              </div>
                              <table>
                                        <tfoot>
                                                  <tr>
                                                            <th className={styles.title_head}>TOTAL</th>
                                                            {
                                                                      totalItemPrice !== 0 ?
                                                                                <th>${parseFloat(totalItemPrice + shippingFee + flatRate).toFixed(2)}</th> :
                                                                                <th>$0</th>
                                                            }

                                                  </tr>
                                        </tfoot>
                              </table>
                    </div>
          );
};

export default memo(CartTotals);
