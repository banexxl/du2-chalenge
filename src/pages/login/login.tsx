import { useState } from 'react'
import { AppLayout } from 'components/Layouts'
import loginStyles from "./login.module.scss"
import { Link, useNavigate } from "react-router-dom"
import Headline from 'components/Headline'
import { useFormik } from "formik";
import { loginSchema } from "../../schema";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import userServices from "../../services/users.services"
import { useTranslation } from 'react-i18next'
import { loginAction } from "store/userSlice"
import { useDispatch } from 'react-redux'


function Login() {

          const { t } = useTranslation();


          const dispatch = useDispatch()
          const navigate = useNavigate()
          const loginUser = userServices.loginUser
          const [openModal, setOpenModal] = useState(false);


          const handleClose = () => {
                    setOpenModal(false)
                    navigate('/')
          }

          const onSubmitHandler = async () => {
                    try {
                              await loginUser(values.username, values.password)
                                        .then(() => {
                                                  setOpenModal(true)
                                                  dispatch(loginAction)
                                        })
                    } catch (error: any) {
                              alert("Invalid username or password!")
                    }

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
                              username: "",
                              password: ""
                    },
                    validationSchema: loginSchema,
                    onSubmit: onSubmitHandler,
          })


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

          return (
                    <AppLayout>
                              <Headline title={t("login")} />
                              <div className={loginStyles.login_container}>
                                        <h1 className={loginStyles.login_title}>Welcome!</h1>
                                        <h1 className={loginStyles.login_title}>Please login to continue</h1>
                                        <form className={loginStyles.form} onSubmit={handleSubmit}>

                                                  <div className={loginStyles.input_group}>
                                                            <label htmlFor="username">User name</label>
                                                            <input
                                                                      value={values.username}
                                                                      onChange={handleChange}
                                                                      id="username"
                                                                      type="username"
                                                                      placeholder="username"
                                                                      onBlur={handleBlur}
                                                                      className={errors.username && touched.username ? "input-error" : ""}
                                                            />
                                                            {errors.username && touched.username && <p className={loginStyles.error}>{errors.username}</p>}
                                                  </div>

                                                  <div className={loginStyles.input_group}>
                                                            <label htmlFor="password">Password</label>
                                                            <input
                                                                      value={values.password}
                                                                      onChange={handleChange}
                                                                      id="password"
                                                                      type="password"
                                                                      placeholder="password"
                                                                      onBlur={handleBlur}
                                                                      className={errors.password && touched.password ? "input-error" : ""}
                                                            />
                                                            {errors.password && touched.password && <p className={loginStyles.error}>{errors.password}</p>}
                                                  </div>

                                                  <button type="submit" className={loginStyles.login_button}>Login</button>
                                        </form>

                              </div >
                              <Modal
                                        open={openModal}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                              >
                                        <Box sx={styleModal}>
                                                  <Typography id="modal-modal-title" variant="h6" component="h2">
                                                            Login successfull!
                                                  </Typography>
                                        </Box>
                              </Modal>
                    </AppLayout>

          )
}

export default Login