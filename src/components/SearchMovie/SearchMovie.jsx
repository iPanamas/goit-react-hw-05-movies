// React-router
import { NavLink } from 'react-router-dom';

// Styles
import s from './SearchMovie.module.css';

const SearchMovie = ({ movies, location }) => {
  return (
    <div className={s.search}>
      <ul className={s.searchList}>
        {movies.map(({ id, original_title }) => (
          <li className={s.searchItem} key={id}>
            <NavLink
              className={s.searchLink}
              to={`${id}`}
              state={{ from: location }}
            >
              {original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchMovie;
