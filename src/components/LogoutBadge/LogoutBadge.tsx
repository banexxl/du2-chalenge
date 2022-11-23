import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogoutBadge.module.scss";
import SvgIcon from "components/SvgIcon";

const LogoutBadge = () => {

          const navigate = useNavigate()

          return (
                    <span className={styles.user_badge}>
                              <div >
                                        <SvgIcon type="logout" className={styles.logout_icon} />
                              </div>
                    </span>
          );
};

export default memo(LogoutBadge);
