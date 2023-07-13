import { cache } from 'react';
import { Event } from '../migrations/1234457678-insertEvents.js';
import { sql } from './connect';

export const getEvents = cache(async () => {
  const events = await sql<Event[]>`
    SELECT * FROM events
 `;
  return events;
});

export const createEvent = cache(
  async (bandame: string, venue: string, date: string, description: string) => {
    const [event] = await sql<Event[]>`
      INSERT INTO events
        (band_name, venue, description, date)
      VALUES
        (${bandame}, ${venue}, ${description} , ${date})
      RETURNING *
    `;

    return event;
  },
);
