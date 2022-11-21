import { memo,useState } from "react";
import CartBadge from "components/CartBadge";
import WishlistBadge from "components/WishlistBadge";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/wonderland.png";
import Container from "components/Container";
import Button from "../Button/Button"
import UserBadge from "components/UserBadge";

export const Header = () => {

  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)
  
  console.log("token u hederu je: " + token);
  

  return (
    <header className={styles.header}>
      <Container className="xs">
        <div className={styles.header_content}>
          <div className={styles.logo_wrapp}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          <nav>
            <ul className={styles.nav_items}>
              <Link to={"/"} className={styles.nav_item}>
                Home
              </Link>
            </ul>
          </nav>
          <div className="flex">
            <WishlistBadge/>
            <CartBadge />
            {
              token ? null : <UserBadge/>
            }
            
          </div>
        </div>
      </Container>
    </header>
  );
};

export default memo(Header);
