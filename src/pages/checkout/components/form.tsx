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
                              <button disabled={isSubmitting} type="submit">
                                        Submit
                              </button>
                    </form>
          );
};
export default BasicForm;