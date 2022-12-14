import styles from "./LogoutBadge.module.scss";
import SvgIcon from "components/Badges/SvgIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

const LogoutBadge = () => {

          const navigate = useNavigate()

          const [notifySuccess, setNotifySuccess] = useState(false);
          const handleClose = () => {
                    setNotifySuccess(false)
                    navigate('/')
          }

          function logout() {
                    window.localStorage.removeItem('access_token')
                    setNotifySuccess(true);
                    setTimeout(() => {
                              navigate("/")
                    }, 3000);
          }

          return (
                    <span className={styles.user_badge}>
                              <div onClick={logout}>
                                        <SvgIcon type="logout" className={styles.logout_icon} />
                              </div>
                              <Snackbar open={notifySuccess} autoHideDuration={3000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                  Successfully logged out!
                                        </Alert>
                              </Snackbar>
                    </span>
          );
};
export default LogoutBadge
