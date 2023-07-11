import Image from 'next/image';
import Link from 'next/link';
import { events } from '../../../migrations/1234457678-insertEvents';
import style from '../../page.module.scss';
import { getProductById } from '../Database/events';

export const metadata = {
  title: 'Single Product Page',
  description: 'This is our Single Product Page',
};

export const dynamic = 'force-dynamic';

type Props = {
  params: { eventId: string };
};



export default async function ProductPage(props: Props) {
  const singleEvent = await getProductById(Number(props.params.eventId));

  console.log(singleEvent);

  if (!singleEvent) {
    notFound();
  }



  return (
    <main className={style.eventMainContainer}>
      <div className={style.eventContentContainer}>
        <Image
           src={`/images/${singleEvent.name}.jpg`}}
          alt={`Event ${events.id}`}
          width={200}
          height={200}
        />
        <div className={style.productInfoContainer}>
          <h1>{singleEvent.bandName}</h1>
          <br />
          <h4>{singleEvent.date} $</h4>
          <br />
          <p>{singleEvent.description}</p>
          <br />
          <div>
            <Link href={`/`}> Go back to home page</Link>
            <br />

          </div>
        </div>
      </div>
    </main>
  );
}
