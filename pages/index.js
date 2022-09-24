import styles from '../styles/Home.module.css';
import { useState } from 'react';
import MovieList from '../components/movieList';

import NewMovies from '../moviesData';

export default function Home() {
  const [data, setData] = useState(NewMovies);

  const removeAMovie = (id) => {
    setData(data.filter((movie) => movie.id !== id));
  };

  if (data.length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 className={styles.title}>No Movies</h1>
        <div className={styles.underline}></div>
        <button
          style={{
            margin: '5rem',
            padding: '0.5rem',
            fontFamily: 'monospace',
            border: '1px solid rgb(71, 71, 197)',
          }}
          onClick={() => setData(NewMovies)}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 className={styles.title}>New Movies</h1>
        <div className={styles.underline}></div>
      </div>
      <main>
        <MovieList movies={data} removeMovie={removeAMovie} />
      </main>
    </>
  );
}
