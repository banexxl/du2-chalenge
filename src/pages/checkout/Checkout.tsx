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


initialValues = {
          firstName: yup.string().required("Required"),
          lastName: yup.string().required("Required"),
          streeAddress: yup.string().required("Required"),
          city: yup.string().required("Required"),
          zipCode: yup.string().required("Required"),
          phone: yup.number().required("Required"),
          email: yup.string().email("Please enter a valid email").required("Required"),
}
validationSchema = { checkoutSchema }
onSubmit = { onSubmitHandler }