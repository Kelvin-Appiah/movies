import Image from 'next/image';
import { useState } from 'react';

import styles from './movie.module.css';

export default function Movie({
  title,
  date,
  image,
  description,
  id,
  removeMovie,
}) {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className={styles.card}>
      <Image width={500} height={450} src={image} alt={title} />

      <div className={styles.flex}>
        <h1 style={{ textTransform: 'capitalize', color: 'blue' }}>{title}</h1>
        <h4 className={styles.date}>{date}</h4>
      </div>

      <p style={{ paddingInline: '1.5rem' }}>
        {readMore ? `${description.substring(0, 201)}...` : description}
        <button
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: 'gray',
          }}
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? 'read  more' : 'show less'}
        </button>{' '}
      </p>

      <button
        onClick={() => {
          removeMovie(id);
        }}
        style={{
          display: 'block',
          marginInline: 'auto ',
          padding: '0.5rem',
          width: '13rem',
          fontFamily: 'monospace',
          border: '1px solid rgb(71, 71, 197)',
        }}
      >
        Not Interested
      </button>
    </article>
  );
}
