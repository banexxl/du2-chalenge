import React, { useState, useEffect } from 'react'
import { AppLayout } from 'components/Layouts'
import loginStyles from "./login.module.scss"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from '../../context/auth/authcontext'

function Login() {

          const [email, setEmail] = useState("")
          const [password, setPassword] = useState("")
          const [error, setError] = useState("")
          const navigate = useNavigate()

          const { loginUser } = useAuth()



          async function onSubmitHandler(e: any) {

                    e.preventDefault()

                    await loginUser(email, password).then(() => {
                              navigate("/Home")
                    }).catch((err: any) => {
                              if (err.message === "Firebase: Error (auth/wrong-password)." || err.message === "Firebase: Error (auth/user-not-found).") {
                                        setError("Wrong email or password. Please try again.")
                              }
                    })
          }


          return (
                    <AppLayout>
                              <div className={loginStyles.login_container}>
                                        <h1 className={loginStyles.login_title}>Welcome!</h1>
                                        <h1 className={loginStyles.login_title}>Please login to continue</h1>
                                        <form className={loginStyles.form} onSubmit={onSubmitHandler}>
                                                  <div className={loginStyles.input_group}>
                                                            <label htmlFor="username">User name</label>
                                                            <input type="username" name="username" id="username" onChange={(e) => setEmail(e.target.value)} />
                                                  </div>

                                                  <div className={loginStyles.input_group}>
                                                            <label htmlFor="password">Password</label>
                                                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                                                  </div>

                                                  <button type="submit" className={loginStyles.login_button}>Login</button>

                                                  <div className={loginStyles.error_message}>

                                                  </div>
                                                  <Link to="/register" className={loginStyles.register_button}>
                                                            Need to register?
                                                  </Link>

                                        </form>

                              </div >
                    </AppLayout>
          )
}

export default Login