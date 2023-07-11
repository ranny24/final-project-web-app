import Avatar from '@mui/material/Avatar';
import { UploadResponseCallback } from 'cloudinary';
import * as React from 'react';

const cloudinary = require('cloudinary').v2;


'use client';

type Props = {
  username: string;
};
export default function AvatarPage(props: Props) {
  return (
    <main>
      {/*     This is how you pass props  */} <Avatar>{props.username}</Avatar>
    </main>
  );
}
