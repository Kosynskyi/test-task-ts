import { RootState } from 'redux/store';

export const selectNews = (state: RootState) => state.news.news;
// export const selectPage = (state: RootState) => state.news.page;
