import styles from './whishlistbadgelisted.module.scss';
import SvgIcon from "components/Badges/SvgIcon";
import { useSelector } from 'react-redux';
import { wishListItemsSelector } from 'store/selectors';

const WishlistBadgeListed = () => {

          const wishListCounter: any = useSelector(wishListItemsSelector)

          return (
                    <span className={styles.wishlist_badge}>
                              <SvgIcon type="heartfilled" className={styles.wishlist_icon} />
                              <span className={styles.wishlist_number}>{wishListCounter}</span>
                    </span>
          )
}

export default WishlistBadgeListed