import { memo, useState } from "react";
import CartBadge from "components/Badges/CartBadge";
import UserBadge from "components/Badges/UserBadge"
import WishlistBadge from "components/Badges/WishlistBadge";
import headerStyles from "./headerStyles.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/wonderland.png";
import Container from "components/Container";
import LoginBadge from "components/Badges/LoginBadge";
import LogoutBadge from "components/Badges/LogoutBadge";

export const Header = () => {

          const token = window.localStorage.getItem("access_token")

          console.log(token);



          return (
                    <header className={headerStyles.header}>
                              <Container className="xs">
                                        <div className={headerStyles.header_content}>
                                                  <div className={headerStyles.logo_wrapp}>
                                                            <img src={logo} alt="logo" className={headerStyles.logo} />
                                                  </div>
                                                  <div>
                                                            <Link to={"/"} className={headerStyles.nav_item}>
                                                                      Home
                                                            </Link>
                                                  </div>
                                                  <div className={headerStyles.flex}>
                                                            <WishlistBadge />
                                                            <CartBadge />
                                                            {
                                                                      token === null || token === "undefined" ? <LoginBadge /> :

                                                                                <div style={{ display: "flex" }}>
                                                                                          <UserBadge />
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
