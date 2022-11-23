import { memo, useState } from "react";
import CartBadge from "components/CartBadge";
import WishlistBadge from "components/WishlistBadge";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/wonderland.png";
import Container from "components/Container";
import { useAuth } from "context/auth/authcontext";

import LoginBadge from "components/LoginBadge";

import LogoutBadge from "components/LogoutBadge";

export const Header = () => {

          //const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)
          const { currentUser } = useAuth()

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
                                                  <div className={styles.flex}>
                                                            <WishlistBadge />
                                                            <CartBadge />
                                                            {
                                                                      currentUser === "null" || currentUser === "undefined" ? <LoginBadge /> : <LogoutBadge />
                                                            }

                                                  </div>
                                        </div>
                              </Container>
                    </header>

          );
};

export default memo(Header);
