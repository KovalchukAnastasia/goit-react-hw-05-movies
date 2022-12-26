import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MovieList.module.css';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  color: black;
  margin-bottom: 10px;

  &.active {
    color: red;
  }
`;
export default function MovieList({ path, movies, state }) {
  return (
    <>
      {/* <h1>Trending Today</h1> */}
      <ul className={style.list}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <StyledLink to={`${path}${id}`} state={state}>
              {title}
            </StyledLink>
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
