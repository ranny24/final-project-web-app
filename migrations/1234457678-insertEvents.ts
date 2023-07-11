import { Sql } from 'postgres';

export type Event = {
  id: number;
  bandName: string;
  venue: string;
  date: string;
  description: string;
  image: string;
};

export const events = [
  {
    id: 1,
    bandName: 'AC/DC',
    venue: 'Madison Square Garden',
    date: '2023-07-15',
    description: 'Rock and Roll concert',
    image: '/images/acdc.jpg',
  },
  {
    id: 2,
    bandName: "Guns N' Roses",
    venue: 'Wembley Stadium',
    date: '2023-08-02',
    description: 'Legendary rock band reunion',
    image: '/images/guns.jpg',
  },
  {
    id: 3,
    bandName: 'Metallica',
    venue: 'Red Rocks Amphitheatre',
    date: '2023-08-10',
    description: 'Heavy metal extravaganza',
    image: '/images/metallica.jpg',
  },
  {
    id: 4,
    bandName: 'Led Zeppelin',
    venue: 'O2 Arena',
    date: '2023-08-18',
    description: 'Classic rock legends live',
    image: '/images/led.jpg',
  },
  {
    id: 5,
    bandName: 'Queen',
    venue: 'The Forum',
    date: '2023-09-05',
    description: 'We will rock you',
    image: '/images/queen.jpg',

  },
  {
    id: 6,
    bandName: 'Foo Fighters',
    venue: 'SSE Hydro',
    date: '2023-09-15',
    description: 'High-energy rock and roll',
    image: '/images/foo.jpg',
  },
  {
    id: 7,
    bandName: 'Nirvana',
    venue: 'Barclaycard Arena',
    date: '2023-10-01',
    description: 'Grunge rock reunion',
    image: '/images/nirvana.jpg',
  },
  {
    id: 8,
    bandName: 'The Rolling Stones',
    venue: 'Rose Bowl Stadium',
    date: '2023-10-10',
    description: 'Rock and blues extravaganza',
    image: '/images/rolling.jpg',
  },
  {
    id: 9,
    bandName: 'Black Sabbath',
    venue: 'Ozzfest',
    date: '2023-11-03',
    description: 'The masters of heavy metal',
    image: '/images/black.jpg',

  },
  {
    id: 10,
    bandName: 'The Who',
    venue: 'Royal Albert Hall',
    date: '2023-11-20',
    description: 'Legendary rockers in concert',
    image: '/images/thewho.jpg',
  },
];

export async function up(sql: Sql) {
  for (const event of events) {
    await sql`
    INSERT INTO events
      (band_name, venue, date, description, image)
    VALUES
      (${event.bandName}, ${event.venue}, ${event.date}, ${event.description}, ${event.image})
    `;
  }
}

export async function down(sql: Sql) {
  for (const event of events) {
    await sql`
      DELETE FROM events WHERE id = ${event.id}
    `;
  }
}
