import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createEvent } from '../../../database/events';
import { Event } from '../../../migrations/1234457678-insertEvents';

export type Error = {
  error: string;
};

/* type EventResponseBodyGet = { events: Event[] } | Error; */
type EventResponseBodyPost = { event: Event } | Error;

const eventSchema = z.object({
  bandName: z.string(),
  venue: z.string(),
  date: z.string().optional(),
  description: z.string().optional(),
  /* image: z.string().optional(), */
});

export async function POST(
  request: NextRequest,
): Promise<NextResponse<EventResponseBodyPost>> {
  const body = await request.json();

  // zod please verify the body matches my schema
  const result = eventSchema.safeParse(body);

  if (!result.success) {
    // zod send you details about the error
    // console.log(result.error);
    return new NextResponse(
      JSON.stringify({
        error: 'The data is incomplete',
      }),
      { status: 400 },
    );
  }
  // query the database to get all the events
  const newEvent = await createEvent(
    result.data.bandName,
    result.data.venue,
    result.data.date,
    result.data.description,
    /* result.data.image, */
  );

  if (!newEvent) {
    // zod send you details about the error
    // console.log(result.error);
    return new NextResponse(
      JSON.stringify({
        error: 'Error creating the new event',
      }),
      { status: 500 },
    );
  }

  return new NextResponse(
    JSON.stringify({
      event: newEvent,
    }),
  );
}
