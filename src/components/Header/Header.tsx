import { memo, useState } from "react";
import CartBadge from "components/CartBadge";
import WishlistBadge from "components/WishlistBadge";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/wonderland.png";
import Container from "components/Container";

import LoginBadge from "components/LoginBadge";

import LogoutBadge from "components/LogoutBadge";

export const Header = () => {

          const token = window.localStorage.getItem("access_token")

          const navigate = useNavigate()

          function logout() {
                    window.localStorage.removeItem('access_token')
                    navigate("/")
          }


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
                                                                      token != null || token !== "undefined" ?
                                                                                <LoginBadge /> :
                                                                                <div onClick={logout}>

                                                                                          <LogoutBadge />

                                                                                </div>


                                                            }
                                                  </div>
                                        </div>
                              </Container>
                    </header>

          );
};

export default memo(Header);
