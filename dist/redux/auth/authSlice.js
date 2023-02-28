"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.setAuth = exports.authReducer = exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    id: '',
    user: '',
    token: '',
    isLoggedIn: false,
};
exports.authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
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
exports.authReducer = exports.authSlice.reducer;
_a = exports.authSlice.actions, exports.setAuth = _a.setAuth, exports.logOut = _a.logOut;
//# sourceMappingURL=authSlice.js.map