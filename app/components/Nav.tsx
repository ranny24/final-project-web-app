import { LogoutButton } from '../LogoutButton';
import styles from './Nav.module.scss';

export default function NavPage({ user }) {
  return (
    <main className={styles.nav}>
      <div className={styles.text}> Rock and Roll, {user.username} !</div>
      <LogoutButton />
    </main>
  );
}
