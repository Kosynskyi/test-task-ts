import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import '../../i18n';

const HomePage: React.FC = () => {
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
        {t('home.title')}
        {/* Вітаємо на головній сторінці */}
      </Typography>
    </Box>
  );
};

export default HomePage;
