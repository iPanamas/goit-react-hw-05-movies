// Hooks
import { useState, useEffect } from 'react';

// API
import * as api from 'services/api';

// Component
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await api.getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <TrendingMovies movies={movies} />
    </>
  );
};

export default HomePage;
