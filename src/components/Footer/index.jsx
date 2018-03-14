import React from 'react';
import Logo from "../Logo";
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.globalFooter}>
      <p>Copyright © {new Date().getFullYear()} Copyright Holder All Rights Reserved.</p>
      <Logo isSmall />
    </footer>
  );
};

export default Footer;