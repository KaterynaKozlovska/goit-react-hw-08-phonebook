import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const NavItemLink = styled(NavLink)`
  position: relative;

  font-weight: 500;
  font-size: 22px;
  color: black;
  text-decoration: none;

  }


`;
