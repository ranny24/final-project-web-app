import { notFound } from 'next/navigation';
import { getUserByUsername } from '../../../database/users';
import styles from './page.module.scss';

type Props = {
  params: { username: string };
};

export default async function ProfileUsernamePage({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <main className={styles.profilePage}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePicture}></div>
        <div className={styles.profileInfo}>
          <h1 className={styles.name}>{user.name}</h1>
          <div className={styles.favoritesContainer}>
            <h2 className={styles.sectionTitle}>Favorites</h2>
            {/* Add your favorite items/components here */}
          </div>
        </div>
      </div>
    </main>
  );
}
