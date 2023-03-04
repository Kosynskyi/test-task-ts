import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { useAppDispatch } from 'hooks/hooks';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'redux/auth/authSelectors';

import { Box, IconButton, Typography } from '@mui/material';
import { Logout } from '@mui/icons-material';

const UserMenu: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAuth();

  const handleClick = (): void => {
    dispatch(logOut());
    <Navigate to="/" />;
  };

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
          {user?.name}
        </Typography>
      </Typography>

      <IconButton
        // variant="outlined"
        aria-label="log out"
        sx={{ color: 'red', marginLeft: '15px' }}
        disabled={isLoading}
        type="submit"
        onClick={handleClick}
      >
        <Logout />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
