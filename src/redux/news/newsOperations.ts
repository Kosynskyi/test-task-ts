import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://newsapi.org/v2/';
const API_KEY = '836bb597fb1b4acbbbc25f3e3e38d94b';

export const getNews = createAsyncThunk(
  'news/getNews',
  async (_, { rejectWithValue }): Promise<any> => {
    try {
      const { data } = await axios(
        `top-headlines?country=ua&page=1&apiKey=${API_KEY}`
      );
      return data.articles;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
