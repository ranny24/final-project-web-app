import { cache } from 'react';
import { Event } from '../migrations/1234457678-insertEvents.js';
import { sql } from './connect';

export const getEvents = cache(async () => {
  const events = await sql<Event[]>`
    SELECT * FROM events
 `;
  return events;
});

export const getArtworkById = cache(async (id: number) => {
  const [events] = await sql<Event[]>`
    SELECT
      *
    FROM
    events
    WHERE
      id = ${id}
  `;
  return events;
});
