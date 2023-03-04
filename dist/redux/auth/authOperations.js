"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCurrentUser = exports.logOut = exports.logIn = exports.registration = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
const react_toastify_1 = require("react-toastify");
const BASE_URL = 'https://connections-api.herokuapp.com';
const token = {
    set(token) {
        axios_1.default.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios_1.default.defaults.headers.common.Authorization = '';
    },
};
exports.registration = (0, toolkit_1.createAsyncThunk)('auth/registration', (user, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${BASE_URL}/users/signup`, user);
        token.set(response.data.token);
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
}));
exports.logIn = (0, toolkit_1.createAsyncThunk)('auth/logIn', (user, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${BASE_URL}/users/login`, user);
        token.set(response.data.token);
        return response.data;
    }
    catch (error) {
        react_toastify_1.toast.error('Maybe you used wrong data or you are not registrated, please check it and try again');
        return rejectWithValue(error.message);
    }
}));
exports.logOut = (0, toolkit_1.createAsyncThunk)('auth/logOut', (_, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${BASE_URL}/users/logout`);
        token.set(response.data.token);
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
}));
exports.fetchCurrentUser = (0, toolkit_1.createAsyncThunk)('auth/fetchCurrentUser', (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken)
        return thunkAPI.rejectWithValue(Error);
    token.set(persistedToken);
    try {
        const { data } = yield (0, axios_1.default)(`${BASE_URL}/users/current`);
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}));
//# sourceMappingURL=authOperations.js.map