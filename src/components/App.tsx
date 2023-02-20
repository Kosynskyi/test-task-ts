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
// import NewsList from './NewsList';
// import { getNews2 } from 'redux/news/newsOperations';

function App() {
  // console.log(getNews2());

  return (
    <Box>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />

          <Route path="news" element={<NewsPage />} />
          {/* <Route path="news" element={<NewsList />} /> */}

          <Route path="profile" element={<ProfilePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
