import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Toast notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import s from './Reviews.module.css';

// API
import * as api from 'services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus(Status.PENDING);

    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await api.getMovieReviews(moviesId);

        if (movieReviews.length === 0) {
          setStatus(Status.IDLE);
          return;
        }

        setStatus(Status.RESOLVED);
        setReviews(movieReviews);
      } catch (error) {
        setStatus(Status.REJECTED);
        return toast.error(
          `Whoops something went wrong, please try again later 🙅‍♂️`
        );
      }
    };
    fetchMovieReviews();
  }, [moviesId]);

  return (
    <div className={s.reviews}>
      {status === Status.IDLE && (
        <h1 className={s.reviewsTitle}>
          We dont have any reviews for this movie 😔
        </h1>
      )}

      {status === Status.RESOLVED && (
        <ul className={s.reviewsList}>
          {reviews.map(({ author, content }) => (
            <li className={s.reviewsItem} key={author}>
              <h2 className={s.reviewsTitle}>Author: {author}</h2>
              <p className={s.reviewsText}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
