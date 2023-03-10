import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchTheMoviedb from '../../services/fetchTheMoviedb';
import style from './MovieDetails.module.css';
import AddInfoBar from '../../components/AddInfoBar/AddInfoBar';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    fetchTheMoviedb(`movie/${movieId}`)
      .then(response => {
        if (!response) {
          return;
        }
        setMovie(response);
      })
      .catch(error => {
        alert(error.message);
      });
  });

  const genres = () => {
    if (!movie.genres) {
      return null;
    }
    return movie.genres.map(({ name }) => <span key={name}>{`${name} `}</span>);
  };

  return (
    <>
      <main>
        {' '}
        <button type="button" className={style.button}>
          <Link
            to={backLinkHref}
            key={backLinkHref}
            className={style.linkButton}
          >
            Go back
          </Link>
        </button>{' '}
        <div className={style.movieDetails}>
          <img
            className={style.img}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div>
            {' '}
            <h2>{movie.title}</h2>
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview: </h3>
            <p>{movie.overview}</p>
            <h3>Genres: </h3>
            {movie.genres ? <p>{genres()}</p> : <p>No information!</p>}
          </div>
        </div>
      </main>
      <AddInfoBar />
      <Outlet />
    </>
  );
}
