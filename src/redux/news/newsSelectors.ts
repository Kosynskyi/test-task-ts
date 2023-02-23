import { RootState } from 'redux/store';

export const selectNews = (state: RootState) => state.news.news;
export const selectIsLoading = (state: RootState) => state.news.isLoading;
