import { useState, useEffect } from 'react';
import * as api from 'services/api';
import { useSearchParams, useLocation } from 'react-router-dom';

// Toast notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'components/Form/Form';
import SearchMovie from 'components/SearchMovie/SearchMovie';

const SearchMoviePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null) {
      return;
    }

    const fetchMovieByKeyWord = async () => {
      try {
        const getMovies = await api.getMovieByKeyWord(query);
        if (getMovies.length === 0) {
          return toast.warning(`${query} not found`);
        }
        setMovies(getMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieByKeyWord();
  }, [query]);

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.info('Please enter movie name');
    }

    setSearchParams({ query: form.elements.query.value });
    setSearchQuery('');
  };

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={searchQuery}
      />
      <SearchMovie movies={movies} location={location} />
    </>
  );
};

export default SearchMoviePage;
