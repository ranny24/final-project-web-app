import { Sql } from 'postgres';

export type User = {
  id: number;
  username: string;
  email: string;
  // Omit passwordHash for security
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      username varchar(80) NOT NULL UNIQUE,
      password_hash varchar(80) NOT NULL,
      email varchar(100) NOT NULL UNIQUE
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE users
  `;
}
