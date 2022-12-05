import styles from './whishlistbadge.module.scss';
import SvgIcon from "components/Badges/SvgIcon";

const WishlistBadge = () => {
          return (
                    <span className={styles.wishlist_badge}>
                              <SvgIcon type="heartfilled" className={styles.wishlist_icon} />
                              <span className={styles.wishlist_number}></span>
                    </span>
          )
}

export default WishlistBadge