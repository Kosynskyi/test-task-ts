import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import SharedLayout from './SharedLayout';
import Skeleton from './Skeleton';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  // const { t, i18n } = useTranslation();
  return (
    <Suspense fallback={<Skeleton />}>
      <Box>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />

            <Route path="news" element={<NewsPage />} />

            <Route path="profile" element={<ProfilePage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Box>
    </Suspense>
  );
}

export default App;
