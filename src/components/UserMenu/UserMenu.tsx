import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';

import { Box, IconButton, Typography } from '@mui/material';
import { Logout } from '@mui/icons-material';

import { useAppDispatch } from 'hooks/hooks';
import { logOut } from 'redux/auth/authSlice';
import { useAuth } from 'redux/auth/authSelectors';

const UserMenu: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" component="p">
        {t('userMenu.greeting')}{' '}
        <Typography variant="body1" component="span" sx={{ fontWeight: 800 }}>
          {user}
        </Typography>
      </Typography>
      <IconButton
        // variant="outlined"
        aria-label="log out"
        sx={{ color: 'red', marginLeft: '15px' }}
        // disabled={isLoading}
        type="submit"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        <Logout />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
