import styles from "./userbadge.module.scss";
import SvgIcon from "components/Badges/SvgIcon";
import { Link } from "react-router-dom";

const UserBadge = () => {
          return (
                    <Link to={"/user"}>
                              <div className={styles.user_badge}>
                                        <SvgIcon type="user" className={styles.user_icon} />
                              </div>
                    </Link>
          )
}

export default UserBadge