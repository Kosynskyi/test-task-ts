"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const translationUk_json_1 = __importDefault(require("./locales/translationUk.json"));
const translationEn_json_1 = __importDefault(require("./locales/translationEn.json"));
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
i18next_1.default
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next)
    .init({
    debug: false,
    fallbackLng: 'ua',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        ua: {
            translation: translationUk_json_1.default,
        },
        en: {
            translation: translationEn_json_1.default,
        },
    },
});
exports.default = i18next_1.default;
//# sourceMappingURL=i18n.js.map