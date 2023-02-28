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
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const material_1 = require("@mui/material");
const SharedLayout_1 = __importDefault(require("./SharedLayout"));
const Skeleton_1 = __importDefault(require("./Skeleton"));
const BackToTop_1 = __importDefault(require("./BackToTop"));
const PrivateRoute_1 = __importDefault(require("./HOCs/PrivateRoute"));
const PublicRoute_1 = __importDefault(require("./HOCs/PublicRoute"));
const HomePage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/HomePage'))));
const LoginPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/LoginPage'))));
const RegistrationPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/RegistrationPage'))));
const NewsPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/NewsPage'))));
const ProfilePage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/ProfilePage'))));
const NotFoundPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/NotFoundPage'))));
function App() {
    return (<react_1.Suspense fallback={<Skeleton_1.default />}>
      <material_1.Box>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<SharedLayout_1.default />}>
            <react_router_dom_1.Route index element={<HomePage />}/>

            <react_router_dom_1.Route element={<PublicRoute_1.default />}>
              <react_router_dom_1.Route path="login" element={<LoginPage />}/>
              <react_router_dom_1.Route path="registration" element={<RegistrationPage />}/>
              <react_router_dom_1.Route path="news" element={<NewsPage />}/>
            </react_router_dom_1.Route>

            <react_router_dom_1.Route element={<PrivateRoute_1.default />}>
              <react_router_dom_1.Route path="profile" element={<ProfilePage />}/>
            </react_router_dom_1.Route>

            <react_router_dom_1.Route path="*" element={<NotFoundPage />}/>
          </react_router_dom_1.Route>
        </react_router_dom_1.Routes>
        <react_toastify_1.ToastContainer />
        <BackToTop_1.default />
      </material_1.Box>
    </react_1.Suspense>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map