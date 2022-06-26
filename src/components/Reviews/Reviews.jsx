import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Styles
import s from './Reviews.module.css';

// API
import * as api from 'services/api';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await api.getMovieReviews(moviesId);
        setReviews(movieReviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieReviews();
  }, [moviesId]);

  return (
    <div className={s.reviews}>
      {reviews && (
        <ul className={s.reviewsList}>
          {reviews.length > 0 ? (
            reviews.map(({ author, content }) => (
              <li className={s.reviewsItem} key={author}>
                <h2 className={s.reviewsTitle}>Author: {author}</h2>
                <p className={s.reviewsText}>{content}</p>
              </li>
            ))
          ) : (
            <h2 className={s.reviewsTitle}>
              We dont have any reviews for this movie
            </h2>
          )}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
