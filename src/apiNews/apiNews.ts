// import axios from 'axios';
// import type { AxiosRequestConfig, AxiosError } from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://newsapi.org/v2/everything?';
// const API_KEY = '836bb597fb1b4acbbbc25f3e3e38d94b';

// https://newsapi.org/v2/everything?q=keyword&apiKey=836bb597fb1b4acbbbc25f3e3e38d94b

// export const getNews = createAsyncThunk('news/getNews', async (_, thunkAPI) => {
//   try {
//     const response = await axios('/news');
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
