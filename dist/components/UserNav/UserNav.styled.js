"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledNavLink = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const react_router_dom_1 = require("react-router-dom");
exports.StyledNavLink = (0, styled_1.default)(react_router_dom_1.NavLink) `
  text-decoration: none;
  &.active {
    color: tomato;
  }
`;
//# sourceMappingURL=UserNav.styled.js.map