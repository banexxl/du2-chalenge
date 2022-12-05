import Headline from 'components/Headline';
import { AppLayout } from 'components/Layouts';
import { useEffect, useState } from 'react';
import BaseHttpService from 'services/base-http.service';
import jwt_decode from "jwt-decode"
import userServices from "../../services/users.services"
import { UserCard } from './UserCard';



export default function UserDetails() {

          type User = {
                    name: {
                              firstname: string
                              lastname: string
                    },
                    address: {
                              city: string,
                              number: string,
                              street: string,
                              zipcode: string
                    },
                    email: string,
                    phone: string,
                    username: string
          }

          const [data, setData] = useState<User>()
          const baseHTTP = BaseHttpService
          const token: any = baseHTTP().getAccessToken()
          var decoded: any = jwt_decode(token);

          useEffect(() => {
                    userServices.getUser(decoded.sub).then((userData) => {
                              setData(userData)
                    })
          }, [])

          return (
                    <AppLayout>
                              <Headline title="User" />
                              {
                                        data ?
                                                  <UserCard firstname={data.name.firstname}
                                                            lastname={data.name.lastname}
                                                            city={data.address.city}
                                                            phone={data.phone}
                                                            email={data.email}
                                                            zipcode={data.address.zipcode}
                                                            street={data.address.street}
                                                  >
                                                  </UserCard>
                                                  :
                                                  <span>Loading...</span>
                              }

                    </AppLayout>
          )
}
