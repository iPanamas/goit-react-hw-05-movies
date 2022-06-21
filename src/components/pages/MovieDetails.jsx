import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// API
import * as api from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await api.getMoviesById(movieId);
        setMovies(movieDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {movies && (
        <div key={movies.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
            alt={movies.original_title}
          />
          <h1>{movies.original_title}</h1>
          <p>User score: {Math.round(movies.popularity)}%</p>
          <h2>Overview</h2>
          <p>{movies.overview}</p>
          <h2>Genres</h2>
          {movies.genres.map(genre => (
            <p key={genre.name}>{genre.name}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieDetails;
