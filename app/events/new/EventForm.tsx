'use client';

import { useState } from 'react';
import { Event } from '../../../migrations/1234457678-insertEvents';
import styles from './EventForm.module.scss';

type Props = {
  events: Event[];
};

export default function EventForm({ events }: Props) {
  const [bandNameInput, setBandNameInput] = useState('');
  const [venueInput, setVenueInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  /*  const [imageInput, setimageInput] = useState(''); */
  const [event, setEvent] = useState<Event>();

  async function createEvent() {
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({
        bandName: bandNameInput,
        venue: venueInput,
        date: dateInput,
        description: descriptionInput,
        /* image: imageInput, */
      }),
    });

    const data = await response.json();

    if ('error' in data) {
      console.log(data.error);
      return;
    }

    setEvent(data.event);
  }

  return (
    <>
      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <label className={styles.label}>
          Band Name
          <input
            className={styles.input}
            value={bandNameInput}
            onChange={(event) => setBandNameInput(event.currentTarget.value)}
          />
        </label>
        <br />
        <label className={styles.label}>
          Venue
          <input
            className={styles.input}
            value={venueInput}
            onChange={(event) => setVenueInput(event.currentTarget.value)}
          />
        </label>
        <br />
        <label className={styles.label}>
          Date
          <input
            className={styles.input}
            value={dateInput}
            onChange={(event) => setDateInput(event.currentTarget.value)}
          />
        </label>
        <br />
        <label className={styles.label}>
          Description
          <input
            className={styles.input}
            value={descriptionInput}
            onChange={(event) => setDescriptionInput(event.currentTarget.value)}
          />
        </label>
        <br />
        <button
          className={styles.button}
          onClick={async () => await createEvent()}
        >
          Create New Event
        </button>
      </form>

      {!event ? null : (
        <div className={styles.new}>
          {' '}
          {event.bandName}, {event.venue}, {event.date}, {event.description},{' '}
          {event.date}{' '}
        </div>
      )}
      {/* {!event ? null : <div  className={styles.new}></div>}
      {!event ? null : <div className={styles.new}></div>}
      {!event ? null : <div className={styles.new}></div>}
      {!event ? null : <div className={styles.new}></div>} */}
    </>
  );
}
