import React from 'react';

import { Box, List, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { StyledNavLink } from './UserNav.styled';

const UserNav: React.FC = () => {
  return (
    <Box>
      <List
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0,
        }}
      >
        <StyledNavLink to="/" end>
          <IconButton
            aria-label="home"
            size="large"
            sx={{ padding: 0, color: 'blue' }}
          >
            <HomeIcon fontSize="inherit" />
          </IconButton>
        </StyledNavLink>
        <StyledNavLink to="/news">
          <IconButton
            aria-label="home"
            size="large"
            sx={{ padding: 0, marginLeft: 2, color: 'blue' }}
          >
            <NewspaperIcon fontSize="inherit" />
          </IconButton>
        </StyledNavLink>
        {/* {isLoggedIn && ( */}
        <StyledNavLink to="/profile">
          <IconButton
            aria-label="profile"
            size="large"
            sx={{ padding: 0, marginLeft: 2, color: 'blue' }}
          >
            <AccountCircleIcon fontSize="inherit" />
          </IconButton>
        </StyledNavLink>
        {/* )} */}
      </List>
    </Box>
  );
};

export default UserNav;
