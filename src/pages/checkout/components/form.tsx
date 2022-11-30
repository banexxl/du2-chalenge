import { useFormik } from "formik";
import { checkoutSchema } from "../../../schema";
import formStyle from "./form.module.scss"
import * as yup from 'yup';


const onSubmit = async (values: any, actions: any) => {
          console.log(values);
          console.log(actions);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          actions.resetForm();
};

const BasicForm = () => {
          const {
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handleBlur,
                    handleChange,
                    handleSubmit,
          } = useFormik({
                    initialValues: {
                              firstName: yup.string().required("Required"),
                              lastName: yup.string().required("Required"),
                              streeAddress: yup.string().required("Required"),
                              city: yup.string().required("Required"),
                              zipCode: yup.string().required("Required"),
                              phone: yup.number().required("Required"),
                              email: yup.string().email("Please enter a valid email").required("Required"),
                    },
                    validationSchema: checkoutSchema,
                    onSubmit,
          });

          console.log(errors);



          return (
                    <form onSubmit={handleSubmit} autoComplete="off">
                              <label htmlFor="firstName">First name</label>
                              <input
                                        value={values.firstName}
                                        onChange={handleChange}
                                        id="firstName"
                                        type="firstName"
                                        placeholder="Enter your first name"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              <button disabled={isSubmitting} type="submit">
                                        Submit
                              </button>
                    </form>
          );
};
export default BasicForm;