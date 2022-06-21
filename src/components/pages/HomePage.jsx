import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// API
import * as api from 'services/api';

// Styles
import s from './Pages.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await api.getTrendingMovies();
        setMovies([...trendingMovies]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={s.homeTitle}>Trending today</h1>
      <ul className={s.homeList}>
        {movies.map(movie => (
          <li className={s.homeItem} key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
