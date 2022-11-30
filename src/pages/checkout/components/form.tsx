import { useFormik } from "formik";
import { checkoutSchema } from "../../../schema";
import formStyle from "./form.module.scss"
import * as yup from 'yup';


const onSubmit = () => {
          console.log("nesta");

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
          }: any = useFormik({
                    initialValues: {
                              firstName: "",
                              lastName: "",
                              streeAddress: "",
                              city: "",
                              zipCode: "",
                              phone: "",
                              email: "",
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
                              <label htmlFor="lastName">Last name</label>
                              <input
                                        value={values.lastName}
                                        onChange={handleChange}
                                        id="lastName"
                                        type="lastName"
                                        placeholder="Enter your last name"
                                        onBlur={handleBlur}
                              />
                              <label htmlFor="streeAddress">Address</label>
                              <input
                                        value={values.streeAddress}
                                        onChange={handleChange}
                                        id="streeAddress"
                                        type="streeAddress"
                                        placeholder="Enter your address"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              <label htmlFor="city">City</label>
                              <input
                                        value={values.city}
                                        onChange={handleChange}
                                        id="city"
                                        type="city"
                                        placeholder="Enter your city"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              <label htmlFor="zipCode">zipCode</label>
                              <input
                                        value={values.zipCode}
                                        onChange={handleChange}
                                        id="zipCode"
                                        type="zipCode"
                                        placeholder="Enter your zip code"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              <label htmlFor="phone">phone</label>
                              <input
                                        value={values.phone}
                                        onChange={handleChange}
                                        id="phone"
                                        type="phone"
                                        placeholder="Enter your phone"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              <label htmlFor="email">email</label>
                              <input
                                        value={values.email}
                                        onChange={handleChange}
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
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