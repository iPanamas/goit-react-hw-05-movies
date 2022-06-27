import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Toast notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import s from './Cast.module.css';

// API
import * as api from 'services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus(Status.PENDING);

    const fetchMovieCast = async () => {
      try {
        const movieCast = await api.getMovieCast(moviesId);

        if (movieCast.length === 0) {
          setStatus(Status.IDLE);
          return;
        }

        setStatus(Status.RESOLVED);
        setCast(movieCast);
      } catch (error) {
        setStatus(Status.REJECTED);
        return toast.error(
          `Whoops something went wrong, please try again later 🙅‍♂️`
        );
      }
    };
    fetchMovieCast();
  }, [moviesId]);

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const DEFAULT_IMG =
    'https://www.pngkey.com/png/full/121-1219231_user-default-profile.png';

  return (
    <div className={s.cast}>
      {status === Status.IDLE && (
        <h1>We dont have any cast for this movie 😔</h1>
      )}

      {status === Status.RESOLVED && (
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
      )}
    </div>
  );
};

export default Cast;
