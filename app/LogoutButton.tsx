'use client';

import { Route } from 'next';
import { useRouter } from 'next/navigation';
import { logout } from './(auth)/logout/actions';
import styles from './LogoutButton.module.scss';

export function LogoutButton() {
  const router = useRouter();
  return (
    <form>
      <button
        className={styles.button}
        formAction={async () => {
          await logout();
          router.push('/' as Route);
          router.refresh();
        }}
      >
        Logout
      </button>
    </form>
  );
}
