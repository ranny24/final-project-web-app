import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <Link href="https://www.facebook.com/" passHref>
          <p target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </p>
        </Link>
        <Link href="https://www.instagram.com/" passHref>
          <p target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </p>
        </Link>
        <Link href="https://twitter.com/" passHref>
          <p target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </p>
        </Link>
        <Link href="https://www.youtube.com/" passHref>
          <p target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
