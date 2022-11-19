import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import SvgIcon from "components/SvgIcon";

const UserBadge = () => {
  return (
    <Link to={"/login"}>
      <span className={styles.user_badge}>
        <SvgIcon type="user" className={styles.user_icon} />
        <span className={styles.user_items_number}>14</span>
      </span>
    </Link>
  );
};

export default memo(UserBadge);
