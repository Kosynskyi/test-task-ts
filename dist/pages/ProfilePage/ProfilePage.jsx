"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const ProfilePage = () => {
    return (<material_1.Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
      <material_1.Typography variant="h2"> Вітаємо на Вашій приватній сторінці</material_1.Typography>
    </material_1.Box>);
};
exports.default = ProfilePage;
//# sourceMappingURL=ProfilePage.jsx.map