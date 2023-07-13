import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <Link href="https://www.facebook.com/">
          <FaFacebook />
        </Link>
        <Link href="https://www.instagram.com/">
          <FaInstagram />
        </Link>
        <Link href="https://twitter.com/">
          <FaTwitter />
        </Link>
        <Link href="https://www.youtube.com/">
          <FaYoutube />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
