"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
require("../../i18n");
const material_1 = require("@mui/material");
const Home_1 = __importDefault(require("@mui/icons-material/Home"));
const react_router_dom_1 = require("react-router-dom");
const NotFoundPage = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (<material_1.Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
        }}>
      <material_1.Typography variant="h1" component="p">
        404
      </material_1.Typography>
      <material_1.Typography variant="h2" component="p" sx={{ textAlign: 'center' }}>
        {t('notFoundPage.title')}{' '}
        <react_router_dom_1.Link to="/">
          <material_1.IconButton>
            {' '}
            <Home_1.default sx={{ width: '100px', height: '100px' }}/>
          </material_1.IconButton>
        </react_router_dom_1.Link>
      </material_1.Typography>
    </material_1.Box>);
};
exports.default = NotFoundPage;
//# sourceMappingURL=NotFoundPage.jsx.map