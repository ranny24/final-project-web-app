import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { events } from '../../../migrations/1234457678-insertEvents';

export type Event = {
  id: number;
  bandName: string;
  venue: string;
  date: string;
  description: string;
  image: string;
};

export type Error = {
  error: string;
};

type EventResponseBodyGet = { events: Event[] } | Error;
type EventResponseBodyPost = { event: Event } | Error;

const eventSchema = z.object({
  bandName: z.string(),
  venue: z.string(),
  date: z.string().optional(),
});

export async function POST(
  request: NextRequest,
): Promise<NextResponse<>EventResponseBodyPost>> {
  const body = await request.json();

  // zod please verify the body matches my schema
  const result = eventSchema.safeParse(body);

  if (!result.success) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'The data is incomplete',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const animal = createEvent(
    result.data.bandName,
    result.data.venue,
    result.data.date,
    result.data.description,
    result.data.image
  );

  if (!events) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'Error creating the new animal',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    event: events,
  });
}
function createEvent(bandName: any, venue: any, date: any, description: any, image: any) {
  throw new Error('Function not implemented.');
}
