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
exports.getNews = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.baseURL = 'https://newsapi.org/v2/';
const API_KEY = '836bb597fb1b4acbbbc25f3e3e38d94b';
exports.getNews = (0, toolkit_1.createAsyncThunk)('news/getNews', (_, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield (0, axios_1.default)(`top-headlines?country=ua&apiKey=${API_KEY}`);
        return data.articles;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
}));
//# sourceMappingURL=newsOperations.js.map