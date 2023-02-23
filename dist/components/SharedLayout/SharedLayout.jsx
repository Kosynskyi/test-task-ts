"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AuthNav_1 = __importDefault(require("components/AuthNav"));
const UserMenu_1 = __importDefault(require("components/UserMenu"));
const UserNav_1 = __importDefault(require("components/UserNav"));
const Skeleton_1 = __importDefault(require("components/Skeleton"));
const material_1 = require("@mui/material");
const SharedLayout = () => {
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
        <AuthNav_1.default />
        <UserMenu_1.default />
      </material_1.Box>
      <react_1.Suspense fallback={<Skeleton_1.default />}>
        <react_router_dom_1.Outlet />
      </react_1.Suspense>
    </material_1.Box>);
};
exports.default = SharedLayout;
//# sourceMappingURL=SharedLayout.jsx.map