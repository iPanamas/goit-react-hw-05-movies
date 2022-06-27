import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Toast notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import Loader from './Loader/Loader';

// Pages
const HomePage = lazy(() => import('../pages/HomePage'));
const SearchMoviePage = lazy(() => import('../pages/SearchMoviePage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMoviePage />} />
          <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
export default App;
