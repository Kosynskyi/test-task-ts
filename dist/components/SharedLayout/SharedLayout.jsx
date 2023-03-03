"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AuthNav_1 = __importDefault(require("components/AuthNav"));
const UserMenu_1 = __importDefault(require("components/UserMenu"));
const UserNav_1 = __importDefault(require("components/UserNav"));
const Skeleton_1 = __importDefault(require("components/Skeleton"));
const ToggleLanguages_1 = __importDefault(require("components/ToggleLanguages"));
const authSelectors_1 = require("redux/auth/authSelectors");
const material_1 = require("@mui/material");
const SharedLayout = () => {
    const { isLoggedIn } = (0, authSelectors_1.useAuth)();
    return (<material_1.Box>
      <material_1.Box component="header" sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 3,
            backgroundColor: 'grey',
        }}>
        <UserNav_1.default />
        {!isLoggedIn && <AuthNav_1.default />}
        <ToggleLanguages_1.default />
        {isLoggedIn && <UserMenu_1.default />}
      </material_1.Box>
      <react_1.Suspense fallback={<Skeleton_1.default />}>
        <react_router_dom_1.Outlet />
      </react_1.Suspense>
    </material_1.Box>);
};
exports.default = SharedLayout;
//# sourceMappingURL=SharedLayout.jsx.map