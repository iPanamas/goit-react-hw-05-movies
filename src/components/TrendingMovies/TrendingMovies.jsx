// Component
import { NavLink } from 'react-router-dom';

// Styles
import s from './TrendingMovies.module.css';

const TrendingMovies = ({ movies }) => {
  return (
    <div className={s.trending}>
      <h1 className={s.trendingTitle}>Trending today</h1>
      <ul className={s.trendingList}>
        {movies.map(({ id, original_title }) => (
          <li className={s.trendingItem} key={id}>
            <NavLink className={s.trendingLink} to={`movies/${id}`}>
              {original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TrendingMovies;
