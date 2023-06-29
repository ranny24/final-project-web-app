import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <img src="/citybuzz1.png" alt="CityBuzz Logo" className={styles.logo}/>
      <nav className={styles.navbar}>
        <ul className={styles.navbarLinks}>
          <li>
            <Link href="/create-event">
              <div className={styles.navbarLink}>Create Event</div>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <div className={styles.navbarLink}>Log In</div>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <div className={styles.navbarLink}>Register</div>
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1>Welcome to CityBuzz!</h1>
        <p>Discover exciting events happening in your city.</p>
      </main>
    </div>



  );
};

export default HomePage;
