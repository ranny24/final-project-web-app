import './globals.css';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { getUserBySessionToken } from '../database/users';
import NavPage from './components/Nav';
import { LogoutButton } from './LogoutButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rock City Riffs',
  description: 'Generated by create next app',
};

type Props = {
  children: import('react').ReactNode;
};

export default async function RootLayout({ children }: Props) {
  // 1. get the session token from the cookie
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <html lang="en">
      <body>
        <div>
          {user ? (
            <>
             {/*  <div>{user.username}</div>
              <LogoutButton /> */}<NavPage user={user}/>
            </>
          ) : (
            <></>
          )}
        </div>

        {children}
      </body>
    </html>
  );
}
