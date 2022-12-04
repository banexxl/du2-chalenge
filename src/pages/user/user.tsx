import Headline from 'components/Headline';
import { AppLayout } from 'components/Layouts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './user.module.css';
import UserServices from "../../services/user.servies"
export default function UserDetails() {

          const params: any = useParams()
          const [data, setData] = useState<any>({});
          const userServices = UserServices

          const getUser = () => {

                    userServices.getUser(params.itemId)
                              .then((data: any) => {
                                        setData(data)
                                        return data
                              }).then()
          }

          useEffect(() => {
                    getUser()
          }, [])

          console.log(data);


          return (
                    <AppLayout>
                              <Headline title="Item Details" />

                    </AppLayout>
          )
}
