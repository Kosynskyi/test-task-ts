import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { themeReducer } from './theme/themeSlice';
import { newsReducer } from './news/newsSlice';

const persistConfig = {
  key: 'news',
  version: 1,
  storage,
  blacklist: ['news'],
};

export const store = configureStore({
  reducer: {
    // news: newsReducer,
    news: persistReducer(persistConfig, newsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
