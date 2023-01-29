import { useState } from 'react'
import { AppLayout } from 'components/Layouts'
import loginStyles from "./login.module.scss"
import { useNavigate } from "react-router-dom"
import Headline from 'components/Headline'
import { useFormik } from "formik";
import { loginSchema } from "../../schema";
import userServices from "../../services/users.services"
import { useTranslation } from 'react-i18next'
import { logIn } from "store/userSlice"
import { useDispatch } from 'react-redux'
import { Alert, Snackbar } from '@mui/material'
import getRolesFromToken from "../../utils/jwtDecoder"

function Login() {

          const { t } = useTranslation();

          const dispatch = useDispatch()
          const navigate = useNavigate()
          const loginUser = userServices.loginUser
          const [notifySuccess, setNotifySuccess] = useState(false);
          const [notifyFail, setNotifyFail] = useState(false);

          const handleClose = () => {
                    setNotifySuccess(false)
                    setNotifyFail(false)
          }

          const onSubmitHandler = () => {
                    loginUser(values.username, values.password)
                              .then(() => {
                                        if (getRolesFromToken()) {
                                                  dispatch(logIn(localStorage.getItem("access_token")))
                                                  setNotifySuccess(true)
                                                  setTimeout(() => {
                                                            navigate("/")
                                                  }, 1000);
                                        } else {
                                                  setNotifyFail(true)
                                        }
                              })
          }

          const {
                    values,
                    errors,
                    touched,
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
                                                  username: mor_2314
                                                  password: 83r5^_
                                                  <button id='buttonlogin' type="submit" className={loginStyles.login_button}>Login</button>
                                        </form>

                              </div >
                              <Snackbar open={notifySuccess} autoHideDuration={3000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                  Successfully logged in!
                                        </Alert>
                              </Snackbar>
                              <Snackbar open={notifyFail} autoHideDuration={3000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                                  Invalid username and/or password!
                                        </Alert>
                              </Snackbar>
                    </AppLayout>

          )
}

export default Login