import React, { useState, useEffect } from 'react'
import { AppLayout } from 'components/Layouts'
import loginStyles from "./login.module.scss"
import { Link } from "react-router-dom"


function Login() {

          const [token, setToken] = useState("")
          const [userName, setUserName] = useState("")
          const [password, setPassword] = useState("")

          const onSubmitHandler = () => {
                    fetch('https://fakestoreapi.com/auth/login', {
                              method: 'POST',
                              body: JSON.stringify({
                                        username: userName,
                                        password: password
                              })
                    })
                              .then(res => {
                                        res.json()
                              })
                              .then(json => console.log(json))
                              .catch((error) => {
                                        console.log(error.message)
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
                                                            <input type="username" name="username" id="username" onChange={(e) => setUserName(e.target.value)} />
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