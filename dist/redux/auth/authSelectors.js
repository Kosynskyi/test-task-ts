"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
const hooks_1 = require("hooks/hooks");
function useAuth() {
    const { user, token, isLoggedIn, isLoading, isFetchingCurrentUser } = (0, hooks_1.useAppSelector)(state => state.auth);
    return {
        user,
        token,
        isLoggedIn,
        isLoading,
        isFetchingCurrentUser,
    };
}
exports.useAuth = useAuth;
//# sourceMappingURL=authSelectors.js.map