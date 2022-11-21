import React, { useState, useEffect } from 'react'
import { AppLayout } from 'components/Layouts'
import loginStyles from "./login.module.scss"
import axios from 'axios'
import Link from "react-router-dom"


function Login() {

   const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")  

  function onSubmitHandler() {
    axios({
            url:'https://fakestoreapi.com/auth/login',
            method:'POST',
            data: {
                username: userName,
                password: password
            }
          
    
    }).then(res => {
      console.log(res.data.token)
    })
    .then(json => console.log(json)).catch(error => {
              console.log(error)
            })
}
 

  return (
    <AppLayout>
                  <div className={loginStyles.login_container}>
                              <h1 className={loginStyles.login_title}>Welcome!</h1>
                              <h1 className={loginStyles.login_title}>Please login to continue</h1>
                              <form className={loginStyles.form} onSubmit={onSubmitHandler}>
                                        <div className={loginStyles.input_group}>
                                                  <label htmlFor="email">Email</label>
                                                  <input type="email" name="email" id="email" onChange={(e) => setUserName(e.target.value)}/>
                                        </div>

                                        <div className={loginStyles.input_group}>
                                                  <label htmlFor="password">Password</label>
                                                  <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                                        </div>

                                        <button type="submit" className={loginStyles.login_button}>Login</button>

                                        <div className={loginStyles.error_message}>

                                        </div>
                                        
        </form>
                                        {/* <Link to="/register" >
                                                  Need to register?
                                        </Link> */}
                    </div >
    </AppLayout>
  )
}

export default Login