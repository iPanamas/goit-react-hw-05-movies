// Hooks
import { useState, useEffect } from 'react';

// Toast notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import s from './Pages.module.css';

// API
import * as api from 'services/api';

// Component
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus(Status.PENDING);

    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await api.getTrendingMovies();

        if (trendingMovies.length === 0) {
          setStatus(Status.IDLE);
          return;
        }

        setStatus(Status.RESOLVED);
        setMovies(trendingMovies);
      } catch (error) {
        setStatus(Status.REJECTED);
        return toast.error(
          `Whoops something went wrong, please try again later 🙅‍♂️`
        );
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {status === Status.IDLE && (
        <h1 className={s.pagesTitle}>
          We don't have popular movies, come back later 😔
        </h1>
      )}
      {status === Status.RESOLVED && <TrendingMovies movies={movies} />}
    </>
  );
};

export default HomePage;
