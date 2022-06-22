import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Pages.module.css';
// API
import * as api from 'services/api';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await api.getMoviesById(moviesId);
        setMovies(movieDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [moviesId]);
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';
  return (
    <>
      {movies && (
        <div className={s.movieDetails} key={movies.id}>
          <img
            className={s.movieDetails__image}
            src={`${BASE_IMG_URL}${movies.poster_path}`}
            alt={movies.original_title}
          />
          <div className={s.movieInfo}>
            <h1 className={s.movieInfo__title}>{movies.original_title}</h1>
            <p className={s.movieInfo__text}>
              User score: {movies.vote_average}
            </p>
            <h2 className={s.movieInfo__title}>Overview</h2>
            <p className={s.movieInfo__text}>{movies.overview}</p>
            <h2 className={s.movieInfo__title}>Genres</h2>
            <ul className={s.genreList}>
              {movies.genres.map(genre => (
                <li className={s.genreItem} key={genre.name}>
                  <p className={s.genreText}>{genre.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
