import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.gif}>
          <img src="/gif.gif" alt="Logo" className={styles.logo} />
          <div>
            <h3 className={styles.h3}> Your Ultimate Concert Hub! </h3>
            <p className={styles.text}>
              Welcome to Rock City Riffs, your go-to platform for discovering
              and connecting with rock band concerts happening in your city!
              With our comprehensive database of upcoming shows, you'll never
              miss the opportunity to experience the electrifying energy of live
              rock music. Sign up to personalize your concert experience, create
              and share events, and connect with fellow rock enthusiasts. We're
              here to foster a vibrant community of music lovers who celebrate
              the power of rock. Join us today, let the music ignite your soul,
              and rock on with Rock City Riffs!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
