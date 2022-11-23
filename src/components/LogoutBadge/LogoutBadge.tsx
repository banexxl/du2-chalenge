import React, { memo, useState } from "react";
import ReactDOM from "react-dom"
import { useNavigate } from "react-router-dom";
import styles from "./LogoutBadge.module.scss";
import SvgIcon from "components/SvgIcon";
import Header from "components/Header";

const LogoutBadge = () => {


          return (
                    <span className={styles.user_badge}>
                              <div>
                                        <SvgIcon type="logout" className={styles.logout_icon} />
                              </div>
                    </span>
          );
};

export default memo(LogoutBadge);
