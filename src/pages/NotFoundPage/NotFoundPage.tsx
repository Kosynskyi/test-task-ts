import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { Box, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Typography variant="h1" component="p">
        404
      </Typography>
      <Typography variant="h2" component="p" sx={{ textAlign: 'center' }}>
        {t('notFoundPage.title')}{' '}
        <Link to="/">
          <IconButton>
            {' '}
            <HomeIcon sx={{ width: '100px', height: '100px' }} />
          </IconButton>
        </Link>
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
