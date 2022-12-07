import Headline from 'components/Headline';
import { AppLayout } from 'components/Layouts';
import { useEffect, useState } from 'react';
import BaseHttpService from 'services/base-http.service';
import jwt_decode from "jwt-decode"
import userServices from "../../services/users.services"
import { UserCard } from './UserCard';
import { Backdrop, Button, CircularProgress } from '@mui/material';



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
          const [openBackdrop, setOpenBackdrop] = useState(false);
          const baseHTTP = BaseHttpService
          const token: any = baseHTTP().getAccessToken()
          var decoded: any = jwt_decode(token);

          useEffect(() => {
                    setOpenBackdrop(true)
                    userServices.getUser(decoded.sub).then((userData) => {
                              setOpenBackdrop(false)
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
                                                  <Backdrop
                                                            sx={{ color: '#fff', zIndex: "10" }}
                                                            open={openBackdrop}
                                                  >
                                                            <CircularProgress style={{ color: "black" }} />
                                                  </Backdrop>

                              }
                    </AppLayout>
          )
}
