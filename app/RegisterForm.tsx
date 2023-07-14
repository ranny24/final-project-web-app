'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { RegisterResponseBodyPost } from './api/(auth)/register/route';
import styles from './RegisterForm.module.scss';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /* const [profileName, setProfileName] = useState(''); */
  const [bio, setBio] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [error, setError] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // change image
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setImageUrl(null);
    }
  };

  // upload image
  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements)
      .filter(
        (element) =>
          element instanceof HTMLInputElement && element.type === 'file',
      )
      .pop() as HTMLInputElement | undefined;
    if (fileInput) {
      const formData = new FormData();
      if (fileInput.files !== null) {
        for (const file of fileInput.files) {
          formData.append('file', file);
        }
      }
      formData.append('upload_preset', 'riffs_upload');

      const profilePic = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        },
      ).then((r) => r.json());

      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
          bio,
          imageUrl: profilePic.secure_url,
        }),
      });

      const data: RegisterResponseBodyPost = await response.json();

      if ('error' in data) {
        setError(data.error);
        return;
      }

      console.log(data.user);
      router.push(`/profile/${data.user.username}`);
      router.refresh();
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.form}>


        <h4 className={styles.title}>Please, register.</h4>

        <form className={styles.loginForm} onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="bio">bio:</label>
            <input
              id="bio"
              data-test-id="register-bio"
              placeholder="Write a little something about yourself"
              value={bio}
              onChange={(event) => setBio(event.currentTarget.value)}
            />
          </div>

          <div className={styles.profilePicDiv}>
            <label htmlFor="profilePic">
              Profile picture <span>*</span>
            </label>
            <input
              data-test-id="register-image"
              id="profilePic"
              type="file"
              name="file"
              ref={fileInputRef}
              onChange={handleOnChange}
              className={styles.profilePicInput}
            />
          </div>

          <div className={styles.imageContainer}>
            {!!imageUrl && (
              <Image
                src={imageUrl}
                height={100}
                width={100}
                alt="User profile avatar"
                className={styles.image}
              />
            )}
          </div>

          <button className={styles.button}>sign up</button>
          {error !== '' && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </div>
  );
}
