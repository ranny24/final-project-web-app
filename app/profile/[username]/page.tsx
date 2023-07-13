import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getUserByUsername } from '../../../database/users';
import styles from './page.module.scss';

type Props = {
  params: { username: string };
  user: {
    id: number;
    username: string;
    bio: string;
    imageUrl: string;
  };
};

export default async function ProfileUsernamePage(props: Props) {
  const user = await getUserByUsername(props.params.username);

  if (!user) {
    notFound();
  }

  return (
    <main className={styles.profilePage}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePicture}>
          {' '}
          {!user?.imageUrl ? (
            <Image
              src="/images/foo.jpg"
              width={100}
              height={100}
              alt="Profile avatar"

            />
          ) : (
            <Image
              src={user.imageUrl}
              width={100}
              height={100}
              alt="Profile avatar uploaded by User"

            />
          )}
          {/* {JSON.stringify(user)} */}
        </div>
        <div className={styles.profileInfo}>
          <h1 className={styles.name}>{user.username}</h1>
          <div className={styles.favoritesContainer}>
            <h2 className={styles.sectionTitle}>Favorites</h2>
            {/* Add your favorite items/components here */}
          </div>
        </div>
      </div>
    </main>
  );
}
