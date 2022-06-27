// PropTypes
import PropTypes, { shape } from 'prop-types';

// Styles
import s from './MovieDetails.module.css';

const MovieDetails = ({ movies }) => {
  const { id, poster_path, original_title, vote_average, overview, genres } =
    movies;

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';
  const DEFAUTL_IMG =
    'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg';

  return (
    <div className={s.movieDetails} key={id}>
      <img
        className={s.movieDetails__image}
        src={poster_path ? `${BASE_IMG_URL}${poster_path}` : `${DEFAUTL_IMG}`}
        alt={original_title}
      />
      <div className={s.movieInfo}>
        <h1 className={s.movieInfo__title}>{original_title}</h1>
        <p className={s.movieInfo__text}>
          User score: {vote_average.toFixed(1)}
        </p>
        <h2 className={s.movieInfo__title}>Overview</h2>
        <p className={s.movieInfo__text}>{overview}</p>
        <h2 className={s.movieInfo__title}>Genres</h2>
        <ul className={s.genreList}>
          {genres.map(({ id, name }) => (
            <li className={s.genreItem} key={id}>
              <p className={s.genreText}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
export default MovieDetails;
