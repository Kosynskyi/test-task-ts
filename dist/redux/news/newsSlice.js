"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsReducer = exports.newsSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const newsOperations_1 = require("./newsOperations");
const initialState = {
    news: [],
    isLoading: false,
};
exports.newsSlice = (0, toolkit_1.createSlice)({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(newsOperations_1.getNews.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(newsOperations_1.getNews.fulfilled, (state, action) => {
            state.news = [...state.news, ...action.payload];
            state.isLoading = false;
        });
        builder.addCase(newsOperations_1.getNews.rejected, state => {
            state.isLoading = false;
        });
    },
});
exports.newsReducer = exports.newsSlice.reducer;
//# sourceMappingURL=newsSlice.js.map