"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const SharedLayout_1 = __importDefault(require("./SharedLayout"));
const HomePage_1 = __importDefault(require("pages/HomePage"));
const LoginPage_1 = __importDefault(require("pages/LoginPage"));
const RegistrationPage_1 = __importDefault(require("pages/RegistrationPage"));
const NewsPage_1 = __importDefault(require("pages/NewsPage"));
const ProfilePage_1 = __importDefault(require("pages/ProfilePage"));
const NotFoundPage_1 = __importDefault(require("pages/NotFoundPage"));
function App() {
    return (<material_1.Box>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<SharedLayout_1.default />}>
          <react_router_dom_1.Route index element={<HomePage_1.default />}/>
          <react_router_dom_1.Route path="login" element={<LoginPage_1.default />}/>
          <react_router_dom_1.Route path="registration" element={<RegistrationPage_1.default />}/>

          <react_router_dom_1.Route path="news" element={<NewsPage_1.default />}/>

          <react_router_dom_1.Route path="profile" element={<ProfilePage_1.default />}/>

          <react_router_dom_1.Route path="*" element={<NotFoundPage_1.default />}/>
        </react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </material_1.Box>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map