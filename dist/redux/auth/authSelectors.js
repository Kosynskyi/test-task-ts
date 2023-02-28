"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
const hooks_1 = require("hooks/hooks");
function useAuth() {
    const { id, user, token, isLoggedIn } = (0, hooks_1.useAppSelector)(state => state.auth);
    return {
        id,
        user,
        token,
        isLoggedIn,
    };
}
exports.useAuth = useAuth;
//# sourceMappingURL=authSelectors.js.map