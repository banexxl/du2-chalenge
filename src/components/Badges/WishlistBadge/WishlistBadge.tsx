import styles from './whishlistbadge.module.scss';
import SvgIcon from "components/Badges/SvgIcon";

const WishlistBadge = () => {

          return (
                    <span className={styles.wishlist_badge}>
                              <SvgIcon type="heart" className={styles.wishlist_icon} />
                    </span>
          )
}

export default WishlistBadge