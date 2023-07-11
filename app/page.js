import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Rock City Riffs!</h1>
        <p className={styles.par}>"Unleashing the Power of Live Music"</p>
        <nav className={styles.navbar}>
          <Link className={styles.test} href="/events/new">
            <div className={styles.navbarLink}>Create Event</div>
          </Link>
          <Link className={styles.test} href="/events">
            <div className={styles.navbarLink}>Events</div>
          </Link>
          <Link className={styles.test} href="/login">
            <div className={styles.navbarLink}>Log In</div>
          </Link>

          <Link className={styles.test} href="/register">
            <div className={styles.navbarLink}>Register</div>
          </Link>
        </nav>

        <div className={styles.gif}>
          <img src="/gif.gif" alt="Logo" className={styles.logo} />
          <div>
            <h3 className={styles.h3}> dard dummy text ever since </h3>
            <p className={styles.text}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
