import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import UserNav from 'components/UserNav';
import Skeleton from 'components/Skeleton';
import ToggleLanguages from 'components/ToggleLanguages';

import { Box } from '@mui/material';

const SharedLayout: React.FC = () => {
  return (
    <Box>
      <Box
        component="header"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 3,
          backgroundColor: 'grey',
        }}
      >
        <UserNav />
        <AuthNav />
        <ToggleLanguages />
        <UserMenu />
      </Box>
      <Suspense fallback={<Skeleton />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;
