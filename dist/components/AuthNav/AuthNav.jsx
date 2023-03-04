"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
require("../../i18n");
const material_1 = require("@mui/material/");
const AuthNav_styled_1 = require("./AuthNav.styled");
const AuthNav = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (<material_1.Box component="nav" aria-label="authorisation">
      <material_1.List sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
        }}>
        <material_1.ListItem sx={{ padding: 0 }}>
          <AuthNav_styled_1.StyledNavLink to="/login" end>
            <material_1.Button variant="outlined" size="medium" sx={{ color: '#096BDE', borderColor: '#6FB6FF' }}>
              {t('authNav.login')}
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
              {t('authNav.registration')}
            </material_1.Button>
          </AuthNav_styled_1.StyledNavLink>
        </material_1.ListItem>
      </material_1.List>
    </material_1.Box>);
};
exports.default = AuthNav;
//# sourceMappingURL=AuthNav.jsx.map