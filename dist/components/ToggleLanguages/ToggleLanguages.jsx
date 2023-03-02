"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
require("../../i18n");
const material_1 = require("@mui/material");
const Language_1 = __importDefault(require("@mui/icons-material/Language"));
const ToggleLanguages = () => {
    const { t, i18n } = (0, react_i18next_1.useTranslation)();
    const switchLang = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (<material_1.Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Language_1.default sx={{ mr: 1 }}/>
      <material_1.Button sx={{
            p: 0,
            color: 'inherit',
            minWidth: '25px',
            mr: 1,
        }} aria-label="switch language" onClick={() => switchLang('en')}>
        EN
      </material_1.Button>
      <material_1.Typography>|</material_1.Typography>
      <material_1.Button sx={{
            p: 0,
            color: 'inherit',
            minWidth: '25px',
            ml: 1,
        }} aria-label="switch language" onClick={() => switchLang('ua')}>
        UA
      </material_1.Button>
    </material_1.Box>);
};
exports.default = ToggleLanguages;
//# sourceMappingURL=ToggleLanguages.jsx.map