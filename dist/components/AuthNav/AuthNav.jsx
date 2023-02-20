"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material/");
const AuthNav_styled_1 = require("./AuthNav.styled");
const AuthNav = () => {
    return (<material_1.Box component="nav" aria-label="authorisation">
      <material_1.List sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
        }}>
        <material_1.ListItem sx={{ padding: 0 }}>
          <AuthNav_styled_1.StyledNavLink to="/login" end>
            <material_1.Button variant="outlined" size="medium" sx={{ color: '#096BDE', borderColor: '#6FB6FF' }}>
              Login
            </material_1.Button>
          </AuthNav_styled_1.StyledNavLink>
        </material_1.ListItem>

        <material_1.ListItem sx={{ padding: 0 }}>
          <AuthNav_styled_1.StyledNavLink to="/registration">
            <material_1.Button variant="outlined" size="medium" sx={{
            color: '#096BDE',
            borderColor: '#6FB6FF',
            marginLeft: '15px',
        }}>
              Registration
            </material_1.Button>
          </AuthNav_styled_1.StyledNavLink>
        </material_1.ListItem>
      </material_1.List>
    </material_1.Box>);
};
exports.default = AuthNav;
//# sourceMappingURL=AuthNav.jsx.map