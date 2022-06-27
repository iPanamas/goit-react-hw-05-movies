import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

// Toast notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// API
import * as api from 'services/api';

// Components
import Form from 'components/Form/Form';
import SearchMovie from 'components/SearchMovie/SearchMovie';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const SearchMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) {
      return;
    }

    setStatus(Status.PENDING);

    const fetchMovieByKeyWord = async () => {
      try {
        const getMovies = await api.getMovieByKeyWord(query);

        if (getMovies.length === 0) {
          setStatus(Status.IDLE);
          return toast.warning(`${query} not found 🤷‍♂️`);
        }

        setStatus(Status.RESOLVED);
        setMovies(getMovies);
      } catch (error) {
        setStatus(Status.REJECTED);
        return toast.error(
          `Whoops something went wrong, please try again later 🙅‍♂️`
        );
      }
    };
    fetchMovieByKeyWord();
  }, [query]);

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      {status === Status.RESOLVED && (
        <SearchMovie movies={movies} location={location} />
      )}
    </>
  );
};

export default SearchMoviePage;
