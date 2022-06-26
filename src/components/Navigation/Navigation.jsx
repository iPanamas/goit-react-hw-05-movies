import { NavLink } from 'react-router-dom';

// Styles
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink className={s.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink className={s.navLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
