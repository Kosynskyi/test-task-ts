import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IAuth {
  id: string;
  user: string;
  token: string;
  isLoggedIn: boolean;
}

const initialState: IAuth = {
  id: '',
  user: '',
  token: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<any>) {
      state.id = action.payload.id;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.id = '';
      state.user = '';
      state.token = '';
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setAuth, logOut } = authSlice.actions;
