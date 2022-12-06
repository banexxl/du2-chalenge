import styles from './whishlistbadge.module.scss';
import SvgIcon from "components/Badges/SvgIcon";
import { useSelector } from 'react-redux';
import { wishListItemsSelector } from 'store/selectors';

const WishlistBadge = () => {

          return (
                    <span className={styles.wishlist_badge}>
                              <SvgIcon type="heart" className={styles.wishlist_icon} />
                    </span>
          )
}

export default WishlistBadge