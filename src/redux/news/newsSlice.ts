import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getNews } from './newsOperations';

interface NewsState {
  news: {
    source: {
      id: string | null;
      name: string | null;
    };
    author: string | null;
    title: string | null;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string | null;
    content: string | null;
  }[];
  isLoading: true | false;
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNews.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action: PayloadAction<any>) => {
      state.news = [...state.news, ...action.payload];
      state.isLoading = false;
    });
    builder.addCase(getNews.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const newsReducer = newsSlice.reducer;
