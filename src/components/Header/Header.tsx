import { memo, useState } from "react";
import CartBadge from "components/CartBadge";
import WishlistBadge from "components/WishlistBadge";
import headerStyles from "./headerStyles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/wonderland.png";
import Container from "components/Container";
import LoginBadge from "components/LoginBadge";
import LogoutBadge from "components/LogoutBadge";

export const Header = () => {

          const token = window.localStorage.getItem("access_token")

          console.log(token);


          const navigate = useNavigate()

          function logout() {
                    window.localStorage.removeItem('access_token')
                    navigate("/")
          }


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
                                                                      token !== null || token !== "undefined" ?

                                                                                <div onClick={logout}>

                                                                                          <LogoutBadge />

                                                                                </div> :
                                                                                <LoginBadge />


                                                            }
                                                  </div>
                                        </div>
                              </Container>
                    </header>

          );
};

export default memo(Header);
