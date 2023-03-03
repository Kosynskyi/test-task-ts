import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
} from './authOperations';

interface IAuth {
  user: { name: string; email: string };
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  isFetchingCurrentUser: boolean;
}

const initialState: IAuth = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // =====================registration=====================
    builder.addCase(registration.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      registration.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      }
    );
    builder.addCase(registration.rejected, state => {
      state.isLoading = false;
    });
    // =====================log in=====================
    builder.addCase(logIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logIn.fulfilled, (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(logIn.rejected, state => {
      state.isLoading = false;
    });
    // =====================log out=====================
    builder.addCase(logOut.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      // state.user.name = '';
      // state.user.email = '';
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(logOut.rejected, state => {
      state.isLoading = false;
    });
    // =====================fetch current=====================
    builder.addCase(fetchCurrentUser.pending, state => {
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    });
    builder.addCase(
      fetchCurrentUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log(action.payload);
        state.user = action.payload.user;
        // state.user.name = action.payload.user?.name;
        // state.user.email = action.payload.user?.email;

        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addCase(fetchCurrentUser.rejected, state => {
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
    });
  },
});

export const authReducer = authSlice.reducer;
