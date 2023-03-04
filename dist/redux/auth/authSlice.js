"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authReducer = exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const authOperations_1 = require("./authOperations");
const initialState = {
    user: { name: '', email: '' },
    token: '',
    isLoggedIn: false,
    isLoading: false,
    isFetchingCurrentUser: false,
};
exports.authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(authOperations_1.registration.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(authOperations_1.registration.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        });
        builder.addCase(authOperations_1.registration.rejected, state => {
            state.isLoading = false;
        });
        builder.addCase(authOperations_1.logIn.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(authOperations_1.logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        });
        builder.addCase(authOperations_1.logIn.rejected, state => {
            state.isLoading = false;
        });
        builder.addCase(authOperations_1.logOut.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(authOperations_1.logOut.fulfilled, state => {
            state.user = { name: '', email: '' };
            state.token = '';
            state.isLoggedIn = false;
            state.isLoading = false;
        });
        builder.addCase(authOperations_1.logOut.rejected, state => {
            state.isLoading = false;
        });
        builder.addCase(authOperations_1.fetchCurrentUser.pending, state => {
            state.isLoading = true;
            state.isFetchingCurrentUser = true;
        });
        builder.addCase(authOperations_1.fetchCurrentUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.isFetchingCurrentUser = false;
        });
        builder.addCase(authOperations_1.fetchCurrentUser.rejected, state => {
            state.isLoading = false;
            state.isFetchingCurrentUser = false;
        });
    },
});
exports.authReducer = exports.authSlice.reducer;
//# sourceMappingURL=authSlice.js.map