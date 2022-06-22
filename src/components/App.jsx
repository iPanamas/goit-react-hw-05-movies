import { Routes, Route } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import Container from './Container/Container';

// PAGES
import HomePage from '../pages/HomePage';
import SearchMovie from '../pages/SearchMoviePage';
import MovieDetails from '../pages/MovieDetailsPage';
import NotFoundPage from '../pages/NotFoundPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<SearchMovie />} />
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};

export default App;
