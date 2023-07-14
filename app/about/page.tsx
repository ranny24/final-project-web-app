import Image from 'next/image';
import Link from 'next/link';
import Dark from '../../public/Dark.gif';
import styles from './page.module.scss';

export const metadata = {
  title: 'Rock City Riffs',
  description: 'About Rock City Riffs',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={`${styles.text} ${styles.div}`}>
          <h1 className={styles.h1}>About Us</h1>

          <p className={styles.p}>
            Rock City Riffs is the ultimate destination for rock music
            enthusiasts seeking the best live concert experiences in their city.
            Our dedicated team is passionate about connecting you with upcoming
            rock band shows, ensuring you never miss out on the electrifying
            energy of live performances. With a carefully curated database
            spanning various rock genres, from classic to alternative, hard rock
            to punk, we cater to diverse musical tastes. Sign up to personalize
            your concert journey, create events, and connect with fellow rock
            lovers.
          </p>
          <p>
            We believe in the power of music to bring people together. Join our
            vibrant community, share your concert experiences, and discover new
            bands that resonate with your soul. Our user-friendly platform
            provides essential details, including dates, venues, and ticket
            availability, for a seamless concert experience. Rock City Riffs is
            your trusted companion in the world of rock music. Let us guide you
            as you immerse yourself in the electrifying world of live rock
            performances. Get ready to rock on with Rock City Riffs!
          </p>
        </div>

        <Image
          className={styles.img}
          src={Dark}
          alt="svg"
          width={0}
          sizes="100vw"
          height={0}
          style={{ width: '25%', height: 'auto' }}
        />
      </div>
    </main>
  );
}
