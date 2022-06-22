import { NavLink, useParams, Outlet } from 'react-router-dom';

import s from './Pages.module.css';

const AdditionalInfo = () => {
  const { moviesId } = useParams();
  return (
    <>
      <div className={s.info}>
        <h2 className={s.infoTitle}>Additional info</h2>
        <ul className={s.infoList}>
          <li className={s.infoItem}>
            <NavLink className={s.infoLink} to={`/movies/${moviesId}/cast`}>
              Cast
            </NavLink>
          </li>
          <li className={s.infoItem}>
            <NavLink className={s.infoLink} to={`/movies/${moviesId}/reviews`}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default AdditionalInfo;
