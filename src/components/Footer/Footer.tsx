import React from 'react'
import styles from './footer.module.css';
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
                                        <div>
                                                  <a href='https://www.levi9.com/'>
                                                            <AiOutlineLink />
                                                            Levi9 Homepage
                                                  </a>
                                        </div>
                                        <div>
                                                  <a href='https://www.facebook.com/Levi9Serbia/'>
                                                            <TbBrandFacebook />
                                                            Facebook
                                                  </a>
                                        </div>
                                        <div>
                                                  <a href='https://www.linkedin.com/company/levi9/mycompany/'>
                                                            <SiLinkedin />
                                                            LinkedIn
                                                  </a>
                                        </div>
                                        <div>
                                                  <a href='https://twitter.com/Levi9company'>
                                                            <BsTwitter />
                                                            Twitter
                                                  </a>
                                        </div>
                                        <div>
                                                  <a href='https://www.youtube.com/@Levi9ITServicesNearshore'>
                                                            <SiYoutube />
                                                            YouTube
                                                  </a>
                                        </div>
                              </div>
                    </footer>
          )
}

export default Footer