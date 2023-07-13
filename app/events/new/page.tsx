import EventForm from './EventForm';
import styles from './page.module.scss';

const newEventPage = () => {
  return (
    <main className={styles.main}>
      <EventForm />
    </main>
  );
};

export default newEventPage;
