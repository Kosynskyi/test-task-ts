import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://63f4a51b3f99f5855db4226b.mockapi.io/news';
// const API_KEY = '836bb597fb1b4acbbbc25f3e3e38d94b';

// export const getNews = createAsyncThunk(
//   'news/getNews',
//   async (_, { rejectWithValue }): Promise<any> => {
//     try {
//       const { data } = await axios(
//         `top-headlines?country=ua&page=1&apiKey=${API_KEY}`
//       );
//       return data.articles;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const getNews = createAsyncThunk(
  'news/getNews',
  async (_, { rejectWithValue }): Promise<any> => {
    try {
      const { data } = await axios('news?p=1&l=10');
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteById = createAsyncThunk(
  'news/deleteById',
  async (id: string, { rejectWithValue }): Promise<any> => {
    try {
      await axios.delete(`/news/${id}`);
      toast.success('Новина видалена успішно', {
        position: 'bottom-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMoreNews = createAsyncThunk(
  'news/loadMoreNews',
  async (page: number, { rejectWithValue }): Promise<any> => {
    try {
      const { data } = await axios(`news?p=${page}&l=10`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
