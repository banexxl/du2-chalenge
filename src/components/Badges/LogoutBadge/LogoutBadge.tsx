import styles from "./LogoutBadge.module.scss";
import SvgIcon from "components/Badges/SvgIcon";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutBadge = () => {

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
                    <span className={styles.user_badge}>
                              <div onClick={logout}>
                                        <SvgIcon type="logout" className={styles.logout_icon} />
                              </div>
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
                    </span>
          );
};
export default LogoutBadge
