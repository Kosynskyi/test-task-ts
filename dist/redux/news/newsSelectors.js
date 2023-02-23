"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectIsLoading = exports.selectNews = void 0;
const selectNews = (state) => state.news.news;
exports.selectNews = selectNews;
const selectIsLoading = (state) => state.news.isLoading;
exports.selectIsLoading = selectIsLoading;
//# sourceMappingURL=newsSelectors.js.map