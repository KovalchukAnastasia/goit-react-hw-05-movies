import { NavLink, useLocation } from 'react-router-dom';
import style from './AddInfoBar.module.css';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  color: black;
  margin-bottom: 10px;

  &.active {
    color: red;
  }
`;

export default function AddInfoBar() {
  const location = useLocation();
  return (
    <>
      {' '}
      <nav className={style.addInfoBar}>
        <p>Additional information: </p>
        <StyledLink
          key={'cast'}
          state={{ from: location?.state?.from }}
          to="cast"
        >
          Cast
        </StyledLink>
        <StyledLink
          key={'reviews'}
          state={{ from: location?.state?.from }}
          to="reviews"
        >
          Reviews
        </StyledLink>
      </nav>
    </>
  );
}
