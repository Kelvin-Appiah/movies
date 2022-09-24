import Movie from './movie';

export default function MovieList({ movies, removeMovie }) {
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} removeMovie={removeMovie} />
      ))}
    </div>
  );
}
