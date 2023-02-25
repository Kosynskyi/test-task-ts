import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import '../../i18n';

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        {' '}
        {t('profile.title')}
      </Typography>
    </Box>
  );
};

export default ProfilePage;
