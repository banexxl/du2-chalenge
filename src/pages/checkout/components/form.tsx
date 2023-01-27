import { useFormik } from "formik";
import { checkoutSchema } from "../../../schema";
import formStyle from "./form.module.scss"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "store/cartSlice";
import { t } from "i18next";

const styleModal = {
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
};


const onSubmit = () => {
          console.log("Form submitted");
}


const BasicForm = () => {

          const navigate = useNavigate()
          const dispatch = useDispatch();

          const [openModal, setOpenModal] = useState(false);
          const handleOpen = () => setOpenModal(true);
          const handleClose = () => {
                    setOpenModal(false)
                    dispatch(clearCart())
                    navigate('/')
          }


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

          return (
                    <form onSubmit={handleSubmit} autoComplete="off" className={formStyle.form_modal}>
                              <label htmlFor="firstName" className={formStyle.form_label}>{t("first_name")}:</label>
                              <input
                                        value={values.firstName}
                                        onChange={handleChange}
                                        id="firstName"
                                        type="firstName"
                                        placeholder="Enter your first name"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              {errors.firstName && touched.firstName && <p className={formStyle.error}>{errors.firstName}</p>}
                              <label htmlFor="lastName" className={formStyle.form_label}>{t("last_name")}:</label>
                              <input
                                        value={values.lastName}
                                        onChange={handleChange}
                                        id="lastName"
                                        type="lastName"
                                        placeholder="Enter your last name"
                                        onBlur={handleBlur}
                              />
                              {errors.lastName && touched.lastName && <p className={formStyle.error}>{errors.lastName}</p>}
                              <label htmlFor="streeAddress" className={formStyle.form_label}>{t("street")}:</label>
                              <input
                                        value={values.streeAddress}
                                        onChange={handleChange}
                                        id="streeAddress"
                                        type="streeAddress"
                                        placeholder="Enter your address"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              {errors.streeAddress && touched.streeAddress && <p className={formStyle.error}>{errors.streeAddress}</p>}
                              <label htmlFor="city" className={formStyle.form_label}>{t("city")}:</label>
                              <input
                                        value={values.city}
                                        onChange={handleChange}
                                        id="city"
                                        type="city"
                                        placeholder="Enter your city"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              {errors.city && touched.city && <p className={formStyle.error}>{errors.city}</p>}
                              <label htmlFor="zipCode" className={formStyle.form_label}>{t("zip")}:</label>
                              <input
                                        value={values.zipCode}
                                        onChange={handleChange}
                                        id="zipCode"
                                        type="zipCode"
                                        placeholder="Enter your zip code"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              {errors.zipCode && touched.zipCode && <p className={formStyle.error}>{errors.zipCode}</p>}
                              <label htmlFor="phone" className={formStyle.form_label}>{t("phone")}:</label>
                              <input
                                        value={values.phone}
                                        onChange={handleChange}
                                        id="phone"
                                        type="phone"
                                        placeholder="Enter your phone"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              {errors.phone && touched.phone && <p className={formStyle.error}>{errors.phone}</p>}
                              <label htmlFor="email" className={formStyle.form_label}>{t("email")}:</label>
                              <input
                                        value={values.email}
                                        onChange={handleChange}
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : ""}
                              />
                              {errors.email && touched.email && <p className={formStyle.error}>{errors.email}</p>}
                              <button disabled={isSubmitting} type="submit" onClick={handleOpen}>
                                        {t("submit")}
                              </button>
                              <Modal
                                        open={openModal}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                              >
                                        <Box sx={styleModal}>
                                                  <Typography id="modal-modal-title" variant="h6" component="h2">
                                                            {t("thank_you")}
                                                  </Typography>
                                                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                            {t("package_confirm_message")}
                                                  </Typography>
                                        </Box>
                              </Modal>
                    </form>
          );
};
export default BasicForm;

