import Image from 'next/image';
import Link from 'next/link';
import { getEvents } from '../../database/events';
import styles from './page.module.scss';

export const metadata = {
  title: 'Concert page',
  description: 'Band Events in Town',
};

export default async function EventPage() {
  const events = await getEvents();
console.log (events)
  return (
    <main>
      <h1 className={styles.h1}>These are the latest Events in Town!</h1>
      {events.map((event) => {
        return (
          <div
            key={`event-div-${event.id}`}

          >
            <Link href={`/event/${event.id}`}>{event.bandName}</Link>
            <br />
           <div className={styles.container}>

            <Image className={styles.image}
              src={event.image}
              alt="Picture of the author"
              width={0}
              sizes="100vw"
              height={0}
              style={{ width: '50%', height: 'auto' }}

            />
          </div>

            {event.description}
          </div>
        );
      })}
    </main>
  );
}
