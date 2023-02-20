"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const UserMenu = () => {
    return (<material_1.Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
      <material_1.Typography variant="body1" component="p">
        Welcome,{' '}
        <material_1.Typography variant="body1" component="span" sx={{ fontWeight: 800 }}>
          name
        </material_1.Typography>
      </material_1.Typography>
      <material_1.IconButton aria-label="log out" sx={{ color: 'red', marginLeft: '15px' }} type="button">
        <icons_material_1.Logout />
      </material_1.IconButton>
    </material_1.Box>);
};
exports.default = UserMenu;
//# sourceMappingURL=UserMenu.jsx.map