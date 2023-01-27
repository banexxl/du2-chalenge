import React from 'react'
import styles from './footer.module.scss';
import logo from '../../assets/images/L9200x200.png';
import { TbBrandFacebook } from "react-icons/tb"
import { AiOutlineLink } from "react-icons/ai"
import { SiLinkedin } from "react-icons/si"
import { BsTwitter } from "react-icons/bs"
import { SiYoutube } from "react-icons/si"

const Footer = () => {
          return (
                    <footer className={styles.footer}>
                              <img src={logo} alt="logo" width="200" className={styles.logo} />
                              <div className={styles.footer_links}>
                                        <div className={styles.footer_icon} >
                                                  <a href='https://www.levi9.com/' target="_blank" rel="noopener noreferrer">
                                                            <AiOutlineLink />
                                                            Levi9 Homepage
                                                  </a>
                                        </div>
                                        <div className={styles.footer_icon}>
                                                  <a href='https://www.facebook.com/Levi9Serbia/' target="_blank" rel="noopener noreferrer">
                                                            <TbBrandFacebook />
                                                            Facebook
                                                  </a>
                                        </div>
                                        <div className={styles.footer_icon}>
                                                  <a href='https://www.linkedin.com/company/levi9/mycompany/' target="_blank" rel="noopener noreferrer">
                                                            <SiLinkedin />
                                                            LinkedIn
                                                  </a>
                                        </div>
                                        <div className={styles.footer_icon} >
                                                  <a href='https://twitter.com/Levi9company' target="_blank" rel="noopener noreferrer">
                                                            <BsTwitter />
                                                            Twitter
                                                  </a>
                                        </div>
                                        <div className={styles.footer_icon}>
                                                  <a href='https://www.youtube.com/@Levi9ITServicesNearshore' target="_blank" rel="noopener noreferrer">
                                                            <SiYoutube />
                                                            YouTube
                                                  </a>
                                        </div>
                              </div>
                    </footer>
          )
}

export default Footer