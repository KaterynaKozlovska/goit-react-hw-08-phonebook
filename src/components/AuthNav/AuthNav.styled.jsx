import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuthItem = styled(NavLink)`
  position: relative;

  font-weight: 500;
  font-size: 18px;

  text-decoration: none;
  color: black;

  :hover,
  :focus {
    color: black;
  }
`;
