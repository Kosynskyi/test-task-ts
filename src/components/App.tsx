import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';
import SharedLayout from './SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  return (
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
  );
}

export default App;
