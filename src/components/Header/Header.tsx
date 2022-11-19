import { memo } from "react";
import CartBadge from "components/CartBadge";
import WishlistBadge from "components/WishlistBadge";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/wonderland.png";
import Container from "components/Container";
import Button from "../Button/Button"
import UserBadge from "components/UserBadge";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_content}>
          <div className={styles.logo_wrapp}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          <nav>
            <ul className={styles.nav_items}>
              <Link to={"/"}>
                <Button className={styles.nav_item}>Home</Button>
              </Link>
            </ul>
          </nav>
          <div className="flex">
            <WishlistBadge />
            <CartBadge />
            <UserBadge/>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default memo(Header);
