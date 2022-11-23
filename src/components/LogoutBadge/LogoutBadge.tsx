import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogoutBadge.module.scss";
import SvgIcon from "components/SvgIcon";
import { useAuth } from '../../context/auth/authcontext'
import { auth } from "../../firebase";

const LogoutBadge = () => {

          const { logoutUser } = useAuth()

          const navigate = useNavigate()

          async function logout() {
                    await logoutUser(auth).then(() => {
                              navigate("/")
                    }).catch((err: any) => {
                              alert(err.message)
                    })
          }

          return (
                    <span className={styles.user_badge}>
                              <div onClick={logout}>
                                        <SvgIcon type="logout" className={styles.user_icon} />
                              </div>
                    </span>
          );
};

export default memo(LogoutBadge);
