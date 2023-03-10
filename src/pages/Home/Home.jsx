import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import fetchTheMoviedb from '../../services/fetchTheMoviedb';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTheMoviedb('trending/movie/day')
      .then(({ results }) => {
        if (!results) {
          return;
        }
        setMovies(results);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);

  return (
    <MovieList path="movies/" movies={movies} state={{ from: location }} />
  );
}
