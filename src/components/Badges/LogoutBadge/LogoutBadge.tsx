import styles from "./LogoutBadge.module.scss";
import SvgIcon from "components/Badges/SvgIcon";

const LogoutBadge = () => {
          return (
                    <span className={styles.user_badge}>
                              <div>
                                        <SvgIcon type="logout" className={styles.logout_icon} />
                              </div>
                    </span>
          );
};
export default LogoutBadge
