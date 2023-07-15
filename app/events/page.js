import Link from 'next/link';
import { getEvents } from '../../database/events';
import styles from './page.module.scss';

export const metadata = {
  title: 'Concert page',
  description: 'Band Events in Town',
};

export default async function EventPage() {
  const events = await getEvents();

  return (
    <main>
      <h1 className={styles.h1}>These are the latest Events in Town!</h1>
      {events.map((event) => {
        return (
          <div key={`event-div-${event.id}`} className={styles.eventContainer}>
            <Link href={`/event/${event.id}`}>
              <p className={styles.bandName}>{event.bandName}</p>
            </Link>
            <div className={styles.imageContainer}>
              <div className={styles.images}>
                <img
                  src={event.image}
                  alt="Picture of the author"
width={500}
height={300}
                />
              </div>
            </div>
            <div className={styles.eventDetails}>
              <div className={styles.detail}>
                <strong>Venue:</strong> {event.venue}
              </div>
              <div className={styles.detail}>
                <strong>Date:</strong> {event.date}
              </div>
              <div className={styles.detail}>
                <strong>Description:</strong> {event.description}
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
