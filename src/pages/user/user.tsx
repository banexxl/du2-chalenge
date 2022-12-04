import Headline from 'components/Headline';
import { AppLayout } from 'components/Layouts';
import { useEffect, useState } from 'react';
import styles from './user.module.css';
import BaseHttpService from 'services/base-http.service';
import jwt_decode from "jwt-decode";
import userServices from "../../services/users.services"



export default function UserDetails() {

          const [data, setData] = useState()
          const baseHTTP = BaseHttpService
          const token: any = baseHTTP().getAccessToken()
          var decoded: any = jwt_decode(token);

          let firstname = ""

          useEffect(() => {
                    userServices.getUser(decoded.sub).then((userData) => {
                              setData(userData)
                    })
          }, [])


          return (
                    <AppLayout>
                              <Headline title="Item Details" />
                              <div className={styles.user_container}>
                                        <div className={styles.image}>

                                        </div>
                                        <div className={styles.user_data}>
                                                  <div className={styles.user_name}>
                                                            Name: { }
                                                  </div>
                                                  <div className={styles.user_email}></div>
                                                  <div className={styles.user_address}></div>
                                                  <div className={styles.user_phone}></div>
                                        </div>
                              </div>
                    </AppLayout>
          )
}
