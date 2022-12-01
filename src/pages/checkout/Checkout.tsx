import Headline from 'components/Headline'
import { AppLayout } from 'components/Layouts'
import CheckoutForm from "../checkout/components/form"
import CartTotals from "../cart/components/CartTotals"
import checkoutStyle from "./checkout.module.scss"

function Checkout() {
          return (
                    <AppLayout>
                              <Headline title='Checkout' />
                              <div className={checkoutStyle.checkout_container}>
                                        <CheckoutForm />
                                        <CartTotals />
                              </div>
                    </AppLayout >
          )
}

export default Checkout
