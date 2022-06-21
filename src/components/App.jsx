import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from './pages/HomePage';
import SearchMovie from './pages/SearchMovie';
import MovieDetails from './pages/MovieDetails';
import NotFoundPage from './pages/NotFoundPage';
import Container from './Container/Container';

const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMovie />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
