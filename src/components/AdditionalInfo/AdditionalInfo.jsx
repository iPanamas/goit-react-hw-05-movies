import { NavLink, useParams, useLocation } from 'react-router-dom';

// Styles
import s from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={s.info}>
      <h2 className={s.infoTitle}>Additional info</h2>
      <ul className={s.infoList}>
        <li className={s.infoItem}>
          <NavLink
            className={s.infoLink}
            to={`/movies/${moviesId}/cast`}
            state={{ from: backLinkHref }}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.infoItem}>
          <NavLink
            className={s.infoLink}
            to={`/movies/${moviesId}/reviews`}
            state={{ from: backLinkHref }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
