import React from 'react';
import { Box, List, ListItem, Button } from '@mui/material/';
import { StyledNavLink } from './AuthNav.styled';

const AuthNav: React.FC = () => {
  return (
    <Box component="nav" aria-label="authorisation">
      <List
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0,
        }}
      >
        <ListItem sx={{ padding: 0 }}>
          <StyledNavLink to="/login" end>
            <Button
              variant="outlined"
              size="medium"
              sx={{ color: '#096BDE', borderColor: '#6FB6FF' }}
            >
              Login
            </Button>
          </StyledNavLink>
        </ListItem>

        <ListItem sx={{ padding: 0 }}>
          <StyledNavLink to="/registration">
            <Button
              variant="outlined"
              size="medium"
              sx={{
                color: '#096BDE',
                borderColor: '#6FB6FF',
                marginLeft: '15px',
              }}
            >
              Registration
            </Button>
          </StyledNavLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default AuthNav;
