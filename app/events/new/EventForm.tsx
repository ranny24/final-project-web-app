'use client';
import Image from 'next/image';
import { NextResponse } from 'next/server';
import { useRef, useState } from 'react';
import { createEvent } from '../../../database/events';
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
  const [imageInput, setImageInput] = useState<File | null>(null);
  const [event, setEvent] = useState<Event>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);


  async function createEvent() {
    const formData = new FormData();
    if (imageInput) {
      formData.append('file', imageInput);
    }
    formData.append('upload_preset', 'riffs_upload');

    const eventPic = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    ).then((r) => r.json());

    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({
        bandName: bandNameInput,
        venue: venueInput,
        date: dateInput,
        description: descriptionInput,
        image: eventPic.secure_url,
      }),
    });

    const data = await response.json();

    if ('error' in data) {
      console.log(data.error);
      return;
    }

    setEvent(data.event);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImageInput(files[0]);
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
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
        <div className={styles.eventPic}>
            <label htmlFor="eventPic">
              Event picture <span>*</span>
            </label>
            <input
              data-test-id="register-image"
              id="eventPic"
              type="file"
              name="file"
              ref={fileInputRef}
              
              className={styles.eventPicInput}
            />
          </div>
        <br />
        <button className={styles.button} onClick={createEvent}>
          Create New Event
        </button>
      </form>

      {!event ? null : (
        <div className={styles.new}>
          {event.bandName}, {event.venue}, {event.date}, {event.description},
          {event.date}
        </div>
      )}
    </>
  );
}
