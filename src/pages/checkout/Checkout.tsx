import Headline from 'components/Headline'
import { AppLayout } from 'components/Layouts'
import CheckoutForm from "../checkout/components/form"

function Checkout() {
          return (
                    <AppLayout>
                              <Headline title='Checkout' />
                              <CheckoutForm />
                    </AppLayout>
          )
}

export default Checkout
