import React, { useState, useEffect } from 'react'
import { AppLayout } from 'components/Layouts'
import loginStyles from "./login.module.scss"
import { Link, useNavigate } from "react-router-dom"



function Login() {

          const [userName, setUsername] = useState("")
          const [password, setPassword] = useState("")
          const [error, setError] = useState("")
          const [token, setToken] = useState("")
          const navigate = useNavigate()

          async function loginUser() {
                    return fetch('https://fakestoreapi.com/auth/login', {
                              method: 'POST',
                              headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*'
                              },
                              body: JSON.stringify({
                                        username: userName,
                                        password: password
                              })
                    })
                              .then(data => data.json())
          }

          const onSubmitHandler = async (e: any) => {
                    e.preventDefault();
                    const token = await loginUser()
                    token != null || token !== undefined ? setToken(token) : setToken("")
                    navigate("/")

                    console.log("Token: " + token.token);

                    window.localStorage.setItem("access_token", token.token)
          }

          return (
                    <AppLayout>
                              <div className={loginStyles.login_container}>
                                        <h1 className={loginStyles.login_title}>Welcome!</h1>
                                        <h1 className={loginStyles.login_title}>Please login to continue</h1>
                                        <form className={loginStyles.form} onSubmit={onSubmitHandler}>
                                                  <div className={loginStyles.input_group}>
                                                            <label htmlFor="username">User name</label>
                                                            <input type="username" name="username" id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                                  </div>

                                                  <div className={loginStyles.input_group}>
                                                            <label htmlFor="password">Password</label>
                                                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                                  </div>

                                                  <button type="submit" className={loginStyles.login_button}>Login</button>

                                                  <div className={loginStyles.error_message}>
                                                            {error}
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