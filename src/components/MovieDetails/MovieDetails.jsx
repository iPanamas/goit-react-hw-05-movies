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
        <p className={s.movieInfo__text}>User score: {vote_average}</p>
        <h2 className={s.movieInfo__title}>Overview</h2>
        <p className={s.movieInfo__text}>{overview}</p>
        <h2 className={s.movieInfo__title}>Genres</h2>
        <ul className={s.genreList}>
          {genres.map(({ name }) => (
            <li className={s.genreItem} key={name}>
              <p className={s.genreText}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
