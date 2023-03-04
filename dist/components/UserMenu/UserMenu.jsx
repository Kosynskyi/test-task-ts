"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
require("../../i18n");
const hooks_1 = require("hooks/hooks");
const authOperations_1 = require("redux/auth/authOperations");
const authSelectors_1 = require("redux/auth/authSelectors");
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const UserMenu = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { user, isLoading } = (0, authSelectors_1.useAuth)();
    const handleClick = () => {
        dispatch((0, authOperations_1.logOut)());
        <react_router_dom_1.Navigate to="/"/>;
    };
    return (<material_1.Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
      <material_1.Typography variant="body1" component="p">
        {t('userMenu.greeting')}{' '}
        <material_1.Typography variant="body1" component="span" sx={{ fontWeight: 800 }}>
          {user === null || user === void 0 ? void 0 : user.name}
        </material_1.Typography>
      </material_1.Typography>

      <material_1.IconButton aria-label="log out" sx={{ color: 'red', marginLeft: '15px' }} disabled={isLoading} type="submit" onClick={handleClick}>
        <icons_material_1.Logout />
      </material_1.IconButton>
    </material_1.Box>);
};
exports.default = UserMenu;
//# sourceMappingURL=UserMenu.jsx.map