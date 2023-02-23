"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_loader_spinner_1 = require("react-loader-spinner");
const material_1 = require("@mui/material");
const Skeleton = () => {
    return (<material_1.Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
      <react_loader_spinner_1.RotatingLines />
    </material_1.Box>);
};
exports.default = Skeleton;
//# sourceMappingURL=Skeleton.jsx.map