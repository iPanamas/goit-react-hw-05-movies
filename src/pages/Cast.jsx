import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Styles
import s from './Pages.module.css';

// API
import * as api from 'services/api';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const movieCast = await api.getMovieCast(moviesId);
        setCast(movieCast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCast();
  }, [moviesId]);

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const DEFAULT_IMG =
    'https://www.pngkey.com/png/full/121-1219231_user-default-profile.png';

  return (
    <div className={s.cast}>
      <ul className={s.castList}>
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li className={s.castItem} key={cast_id}>
            <img
              className={s.castImage}
              src={
                profile_path
                  ? `${BASE_IMG_URL}${profile_path}`
                  : `${DEFAULT_IMG}`
              }
              alt=""
              width="200"
              height="300"
            />
            <p className={s.castText__name}>{name}</p>
            <p className={s.castText__character}>
              <b>Character:</b> {character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
