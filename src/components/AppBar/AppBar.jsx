import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './AppBar.module.css';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 20px;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

export default function AppBar() {
  return (
    <>
      <nav className={style.appBar}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense fallback={null}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
}
