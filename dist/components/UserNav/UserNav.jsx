"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Home_1 = __importDefault(require("@mui/icons-material/Home"));
const AccountCircle_1 = __importDefault(require("@mui/icons-material/AccountCircle"));
const Newspaper_1 = __importDefault(require("@mui/icons-material/Newspaper"));
const UserNav_styled_1 = require("./UserNav.styled");
const UserNav = () => {
    return (<material_1.Box>
      <material_1.List sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
        }}>
        <UserNav_styled_1.StyledNavLink to="/">
          <material_1.IconButton aria-label="home" size="large" sx={{ padding: 0, color: 'blue' }}>
            <Home_1.default fontSize="inherit"/>
          </material_1.IconButton>
        </UserNav_styled_1.StyledNavLink>
        <UserNav_styled_1.StyledNavLink to="/news">
          <material_1.IconButton aria-label="home" size="large" sx={{ padding: 0, color: 'blue' }}>
            <Newspaper_1.default fontSize="inherit"/>
          </material_1.IconButton>
        </UserNav_styled_1.StyledNavLink>
        
        <UserNav_styled_1.StyledNavLink to="/profile">
          <material_1.IconButton aria-label="profile" size="large" sx={{ padding: 0, marginLeft: 2, color: 'blue' }}>
            <AccountCircle_1.default fontSize="inherit"/>
          </material_1.IconButton>
        </UserNav_styled_1.StyledNavLink>
        
      </material_1.List>
    </material_1.Box>);
};
exports.default = UserNav;
//# sourceMappingURL=UserNav.jsx.map