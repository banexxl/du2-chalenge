import styles from "./userbadge.module.scss";
import SvgIcon from "components/Badges/SvgIcon";

const UserBadge = () => {
          return (
                    <div className={styles.user_badge}>
                              <SvgIcon type="user" className={styles.user_icon} />
                    </div>
          )
}

export default UserBadge