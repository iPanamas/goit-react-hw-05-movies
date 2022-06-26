import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'b5a4402f376b07e7f2b259d1d47ff1e6';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getMoviesById = async moviesId => {
  const response = await axios.get(`/movie/${moviesId}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCast = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const getMovieReviews = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getMovieByKeyWord = async searchQuery => {
  const response = await axios.get(
    `/search/movie/?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
};
