"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const redux_persist_1 = require("redux-persist");
const storage_1 = __importDefault(require("redux-persist/lib/storage"));
const newsSlice_1 = require("./news/newsSlice");
const persistConfig = {
    key: 'news',
    version: 1,
    storage: storage_1.default,
    blacklist: ['news'],
};
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        news: (0, redux_persist_1.persistReducer)(persistConfig, newsSlice_1.newsReducer),
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER],
        },
    }),
});
exports.persistor = (0, redux_persist_1.persistStore)(exports.store);
//# sourceMappingURL=store.js.map