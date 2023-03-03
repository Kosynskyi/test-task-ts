import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RootState } from 'redux/store';

const BASE_URL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

interface IAuth {
  name: string;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

export const registration = createAsyncThunk(
  'auth/registration',
  async (user: IAuth, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, user);
      token.set(response.data.token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (user: ILogin, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, user);
      token.set(response.data.token);
      return response.data;
    } catch (error: any) {
      toast.error(
        'Maybe you used wrong data or you are not registrated, please check it and try again'
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/logout`);
      token.set(response.data.token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState();
    const persistedToken: string = state.auth.token;
    console.log(persistedToken);

    if (!persistedToken) return thunkAPI.rejectWithValue(Error);

    token.set(persistedToken);
    try {
      const { data } = await axios(`${BASE_URL}/users/current`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
