import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getNews, deleteById, loadMoreNews } from './newsOperations';

interface INewsState {
  news: {
    publishedAt: string;
    title: string;
    description: string;
    id: string;
  }[];
  isLoading: true | false;
}

const initialState: INewsState = {
  news: [],
  isLoading: false,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // =====================getNews=====================
    builder.addCase(getNews.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action: PayloadAction<any>) => {
      state.news = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getNews.rejected, state => {
      state.isLoading = false;
    });
    // =====================deleteById=====================
    builder.addCase(deleteById.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      deleteById.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.news = state.news.filter(({ id }) => id !== action.payload);
        state.isLoading = false;
      }
    );
    builder.addCase(deleteById.rejected, state => {
      state.isLoading = false;
    });
    // =====================loadMoreNews=====================
    builder.addCase(loadMoreNews.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      loadMoreNews.fulfilled,
      (state, action: PayloadAction<any>) => {
        // state.news = [...state.news, ...action.payload];
        state.news.push(...action.payload);
        state.isLoading = false;
      }
    );
    builder.addCase(loadMoreNews.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const newsReducer = newsSlice.reducer;
