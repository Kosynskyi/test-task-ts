import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active > button {
    color: #57b846d7;
    transform: scale(1.7);
  }
`;
