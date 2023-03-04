import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';
import SharedLayout from './SharedLayout';
import Skeleton from './Skeleton';
import BackToTop from './BackToTop';
import { useAppDispatch } from 'hooks/hooks';
import { useAuth } from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';

import PrivateRoute from './HOCs/PrivateRoute';
import PublicRoute from './HOCs/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  const dispatch = useAppDispatch();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) return;

    dispatch(fetchCurrentUser());
  }, [dispatch, token]);

  return (
    <Suspense fallback={<Skeleton />}>
      <Box>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />

            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="registration" element={<RegistrationPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="profile" element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <ToastContainer />
        <BackToTop />
      </Box>
    </Suspense>
  );
}

export default App;
