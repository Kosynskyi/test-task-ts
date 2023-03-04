"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Skeleton_1 = __importDefault(require("components/Skeleton"));
const authSelectors_1 = require("redux/auth/authSelectors");
const PrivateRoute = () => {
    const { isLoggedIn } = (0, authSelectors_1.useAuth)();
    return isLoggedIn ? (<react_1.Suspense fallback={<Skeleton_1.default />}>
      <react_router_dom_1.Outlet />
    </react_1.Suspense>) : (<react_router_dom_1.Navigate to="/"/>);
};
exports.default = PrivateRoute;
//# sourceMappingURL=PrivateRoute.jsx.map