import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE events (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      band_name varchar(30) NOT NULL,
      venue varchar(30) NOT NULL,
      date varchar(40),
      description text NOT NULL,
      image varchar(100)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE events
  `;
}
