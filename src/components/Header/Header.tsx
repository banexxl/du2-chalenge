import { memo, useState } from "react";
import CartBadge from "components/Badges/CartBadge";
import UserBadge from "components/Badges/UserBadge"
import WishlistBadge from "components/Badges/WishlistBadge";
import headerStyles from "./headerStyles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/wonderland.png";
import Container from "components/Container";
import LoginBadge from "components/Badges/LoginBadge";
import LogoutBadge from "components/Badges/LogoutBadge";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Header = () => {

          const token = window.localStorage.getItem("access_token")
          const navigate = useNavigate()

          const [openModal, setOpenModal] = useState(false);
          const handleOpen = () => setOpenModal(true);
          const handleClose = () => {
                    setOpenModal(false)
                    navigate('/')
          }

          function logout() {
                    window.localStorage.removeItem('access_token')
                    handleOpen()
                    navigate("/")
          }

          const styleModal = {
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
          };


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
                                                                                          <span onClick={logout}>
                                                                                                    <LogoutBadge />
                                                                                          </span>
                                                                                          <span>
                                                                                                    <UserBadge />
                                                                                          </span>
                                                                                </div>
                                                            }
                                                  </div>
                                        </div>
                              </Container>
                              <Modal
                                        open={openModal}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                              >
                                        <Box sx={styleModal}>
                                                  <Typography id="modal-modal-title" variant="h6" component="h2">
                                                            Logout successfull!
                                                  </Typography>
                                        </Box>
                              </Modal>
                    </header>

          );
};

export default memo(Header);
