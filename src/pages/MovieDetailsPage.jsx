import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

// Toast notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';
import BackLink from 'components/BackLink/Backlink';
import MovieDetails from 'components/MovieDetails/MovieDetails';

// Styles
import s from './Pages.module.css';

// API
import * as api from 'services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus(Status.PENDING);

    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await api.getMoviesById(moviesId);

        if (!movieDetails) {
          setStatus(Status.IDLE);
          return;
        }

        setStatus(Status.RESOLVED);
        setMovies(movieDetails);
      } catch (error) {
        setStatus(Status.REJECTED);
        return toast.error(
          `Whoops something went wrong, please try again later`
        );
      }
    };
    fetchMovieDetails();
  }, [moviesId]);

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      {status === Status.IDLE && (
        <h1 className={s.pagesTitle}>
          We dont have details from this movie 😔
        </h1>
      )}

      {status === Status.RESOLVED && <MovieDetails movies={movies} />}
      {status === Status.RESOLVED && <AdditionalInfo />}
      {status === Status.RESOLVED && <Outlet />}
    </>
  );
};

export default MovieDetailsPage;
