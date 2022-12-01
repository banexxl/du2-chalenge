import React from 'react'
import styles from './footer.module.css';
import logo from '../../assets/images/L9200x200.png';

const Footer = () => {
          return (
                    <footer className={styles.footer}>
                              <img src={logo} alt="logo" width="200" className={styles.logo} />
                    </footer>
          )
}

export default Footer