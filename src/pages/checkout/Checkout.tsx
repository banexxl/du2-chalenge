import Headline from 'components/Headline'
import { AppLayout } from 'components/Layouts'
import CheckoutForm from "../checkout/components/form"
import CartTotals from "../cart/components/CartTotals"
import checkoutStyle from "./checkout.module.scss"
import { useTranslation } from 'react-i18next'

function Checkout() {

          const { t } = useTranslation();

          return (
                    <AppLayout>
                              <Headline title={t("checkout")} />
                              <div className={checkoutStyle.checkout_container}>
                                        <CheckoutForm />
                                        <CartTotals />
                              </div>
                    </AppLayout >
          )
}

export default Checkout
