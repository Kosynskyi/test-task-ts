import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import NewsPage from 'pages/NewsPage';
import ProfilePage from 'pages/ProfilePage';
import NotFoundPage from 'pages/NotFoundPage';

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

      <p>qwerqwerqwer</p>
    </Box>
  );
}

export default App;
