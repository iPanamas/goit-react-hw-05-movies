import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

// Components
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';
import BackLink from 'components/BackLink/Backlink';
import MovieDetails from 'components/MovieDetails/MovieDetails';

// API
import * as api from 'services/api';

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/goit-react-hw-05-movies';

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

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      {movies && <MovieDetails movies={movies} />}
      <AdditionalInfo />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
