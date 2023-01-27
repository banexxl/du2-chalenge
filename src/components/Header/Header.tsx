import { memo, useEffect, useState } from "react";
import CartBadge from "components/Badges/CartBadge";
import UserBadge from "components/Badges/UserBadge"
import WishlistBadge from "components/Badges/WishlistBadge";
import headerStyles from "./headerStyles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/wonderland.png";
import Container from "components/Container";
import LoginBadge from "components/Badges/LoginBadge";
import LogoutBadge from "components/Badges/LogoutBadge";
import { useSelector } from "react-redux";
import WishListBadgeListed from "components/Badges/WishlistBadgeListed"
import LanguageSelect from "../Language/languageSelect"
import { useDispatch } from "react-redux"
import { clearCart } from "store/cartSlice"
import { clearWishList } from "store/wishListSlice"
import getRolesFromToken from "../../utils/jwtDecoder"
import { Alert, Snackbar } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Header = () => {

          const { t } = useTranslation();
          const validated = getRolesFromToken()
          const [userValidated, setUserValidated] = useState(false)

          window.addEventListener("storage", () => {
                    window.location.reload();
          })

          const navigate = useNavigate()
          const wishList = useSelector((state: any) => state.wishList)
          const dispatch = useDispatch()

          const [notifySuccess, setNotifySuccess] = useState(false);
          const handleOpen = () => setNotifySuccess(true);
          const handleClose = () => {
                    setNotifySuccess(false)
                    navigate('/')
          }

          function logout() {
                    window.localStorage.removeItem('access_token')
                    handleOpen()
                    dispatch(clearCart())
                    dispatch(clearWishList())
                    navigate("/")
          }

          useEffect(() => {
                    setUserValidated(validated)
          }, [validated])

          return (
                    <header className={headerStyles.header}>
                              <Container className="xs">
                                        <div className={headerStyles.header_content}>
                                                  <div className={headerStyles.logo_wrapp}>
                                                            <img src={logo} alt="logo" className={headerStyles.logo} />
                                                  </div>
                                                  <div>
                                                            <Link to={"/"} className={headerStyles.nav_item}>
                                                                      {t("home")}
                                                            </Link>
                                                            {
                                                                      userValidated ?
                                                                                <Link to={"/example"} className={headerStyles.nav_item}>
                                                                                          Example
                                                                                </Link>
                                                                                : null
                                                            }

                                                  </div>
                                                  <div className={headerStyles.header_content}>
                                                            <LanguageSelect />
                                                            {
                                                                      wishList === undefined || wishList.length === 0 ?
                                                                                <Link to="/wishlist">
                                                                                          <WishlistBadge />
                                                                                </Link>
                                                                                :
                                                                                <Link to="/wishlist">
                                                                                          <WishListBadgeListed />
                                                                                </Link>

                                                            }
                                                            <CartBadge />
                                                            {
                                                                      userValidated ?
                                                                                null
                                                                                :
                                                                                <LoginBadge />
                                                            }
                                                            <div style={{ display: "flex" }}>
                                                                      {
                                                                                userValidated ?
                                                                                          <div className={headerStyles.user_actions}>
                                                                                                    <span onClick={logout}>
                                                                                                              <LogoutBadge />
                                                                                                    </span>
                                                                                                    <span>
                                                                                                              <UserBadge />
                                                                                                    </span>
                                                                                          </div>
                                                                                          : null
                                                                      }
                                                            </div>

                                                  </div>
                                        </div>
                              </Container>
                              <Snackbar open={notifySuccess} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                  Logged out successfully!
                                        </Alert>
                              </Snackbar>

                    </header>

          );
};

export default memo(Header);
