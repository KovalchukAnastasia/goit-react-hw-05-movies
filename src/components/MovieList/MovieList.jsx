import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MovieList.module.css';
export default function MovieList({ path, movies, state }) {
  return (
    <>
      {/* <h1>Trending Today</h1> */}
      <ul className={style.list}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`${path}${id}`} state={state} className={style.link}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
MovieList.propTypes = {
  path: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
};
