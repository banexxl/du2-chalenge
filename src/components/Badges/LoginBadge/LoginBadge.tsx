import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginBadge.module.scss";
import SvgIcon from "components/Badges/SvgIcon";

const LoginBadge = () => {
          return (
                    <Link to={"/auth/login"}>
                              <span className={styles.user_badge}>
                                        <SvgIcon type="login" className={styles.user_icon} />
                              </span>
                    </Link>
          );
};

export default memo(LoginBadge);
