import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { Box, List, ListItem, Button } from '@mui/material/';
import { StyledNavLink } from './AuthNav.styled';

const AuthNav: React.FC = () => {
  const { t } = useTranslation();

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
              {t('authNav.login')}
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
              {t('authNav.registration')}
            </Button>
          </StyledNavLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default AuthNav;
