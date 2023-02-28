"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_i18next_1 = require("react-i18next");
require("../../i18n");
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const hooks_1 = require("hooks/hooks");
const authSlice_1 = require("redux/auth/authSlice");
const authSelectors_1 = require("redux/auth/authSelectors");
const UserMenu = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { user } = (0, authSelectors_1.useAuth)();
    return (<material_1.Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
      <material_1.Typography variant="body1" component="p">
        {t('userMenu.greeting')}{' '}
        <material_1.Typography variant="body1" component="span" sx={{ fontWeight: 800 }}>
          {user}
        </material_1.Typography>
      </material_1.Typography>
      <material_1.IconButton aria-label="log out" sx={{ color: 'red', marginLeft: '15px' }} type="submit" onClick={() => {
            dispatch((0, authSlice_1.logOut)());
        }}>
        <icons_material_1.Logout />
      </material_1.IconButton>
    </material_1.Box>);
};
exports.default = UserMenu;
//# sourceMappingURL=UserMenu.jsx.map