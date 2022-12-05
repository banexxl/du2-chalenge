import styles from "./userbadge.module.scss";
import SvgIcon from "components/Badges/SvgIcon";

const UserBadgeLarge = () => {
          return (

                    <div className={styles.user_badge}>
                              <SvgIcon type="userlarge" className={styles.user_icon} />
                    </div>

          )
}

export default UserBadgeLarge