
import { AppLayout } from 'components/Layouts'
import registerStyles from "./register.module.scss"
import React, { useState } from 'react'


function Register() {

          const [userName, setUserName] = useState("")
          const [password, setPassword] = useState("")

          fetch('https://fakestoreapi.com/users', {
                    method: "POST",
                    body: JSON.stringify(
                              {
                                        email: 'John@gmail.com',
                                        username: 'johnd',
                                        password: 'm38rmF$',
                                        name: {
                                                  firstname: 'John',
                                                  lastname: 'Doe'
                                        },
                                        address: {
                                                  city: 'kilcoole',
                                                  street: '7835 new road',
                                                  number: 3,
                                                  zipcode: '12926-3874',
                                                  geolocation: {
                                                            lat: '-37.3159',
                                                            long: '81.1496'
                                                  }
                                        },
                                        phone: '1-570-236-7033'
                              }
                    )
          })
                    .then(res => res.json())
                    .then(json => console.log(json))


          return (
                    <AppLayout>
                              <div className={registerStyles.register_container}>
                                        <h1 className={registerStyles.register_title}>Welcome!</h1>
                                        <h1 className={registerStyles.register_title}>Please register to continue</h1>
                                        <form className={registerStyles.form}>
                                                  <div className={registerStyles.input_group}>
                                                            <label htmlFor="email">Email</label>
                                                            <input type="email" name="email" id="email" />
                                                  </div>

                                                  <div className={registerStyles.input_group}>
                                                            <label htmlFor="password">Password</label>
                                                            <input type="password" name="password" id="password" />
                                                  </div>

                                                  <button type="submit" className={registerStyles.register_button}>Register</button>

                                                  <div className={registerStyles.error_message}>

                                                  </div>

                                        </form>

                              </div >
                    </AppLayout>
          )
}

export default Register