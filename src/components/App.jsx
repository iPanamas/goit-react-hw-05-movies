import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';

// PAGES
const HomePage = lazy(() => import('../pages/HomePage'));
const SearchMovie = lazy(() => import('../pages/SearchMoviePage'));
const MovieDetails = lazy(() => import('../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMovie />} />
          <Route path="/movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
export default App;
