"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
require("../../i18n");
const material_1 = require("@mui/material");
const Person_1 = __importDefault(require("@mui/icons-material/Person"));
const Mail_1 = __importDefault(require("@mui/icons-material/Mail"));
const Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
const Visibility_1 = __importDefault(require("@mui/icons-material/Visibility"));
const VisibilityOff_1 = __importDefault(require("@mui/icons-material/VisibilityOff"));
const hooks_1 = require("hooks/hooks");
const authOperations_1 = require("redux/auth/authOperations");
const authSelectors_1 = require("redux/auth/authSelectors");
const RegistrationPage_styled_1 = require("./RegistrationPage.styled");
const RegistrationPage = () => {
    var _a, _b, _c;
    const { isLoading } = (0, authSelectors_1.useAuth)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const handleClickShowPassword = () => setShowPassword(show => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { register, handleSubmit, reset, formState: { errors }, } = (0, react_hook_form_1.useForm)({ mode: 'onBlur' });
    const onSubmit = data => {
        dispatch((0, authOperations_1.registration)(data));
        reset();
    };
    return (<material_1.Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
        }}>
      <material_1.Card sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '300px',
        }}>
        <material_1.CardContent>
          <material_1.Typography variant="subtitle2" align="center" fontSize="18px">
            {t('registrationPage.title')}
          </material_1.Typography>
          <material_1.Box component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            
            <material_1.TextField id="name" type="text" size="small" label={t('registrationPage.helperTextName')} sx={{ width: '100%' }} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                    <Person_1.default />
                  </material_1.InputAdornment>),
        }} variant="standard" margin="dense" {...register('name', {
        required: 'required',
        maxLength: { value: 25, message: 'maximum 25 symbols' },
    })}/>
            {errors.name && (<material_1.Typography sx={{ color: 'red' }} variant="caption" role="alert">
                {(errors === null || errors === void 0 ? void 0 : errors.name) && ((_a = errors === null || errors === void 0 ? void 0 : errors.name) === null || _a === void 0 ? void 0 : _a.message)}
              </material_1.Typography>)}

            
            <material_1.TextField id="login" type="email" size="small" label={t('registrationPage.helperTextLogin')} sx={{ width: '100%' }} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                    <Mail_1.default />
                  </material_1.InputAdornment>),
        }} variant="standard" margin="dense" {...register('email', {
        required: 'required',
        maxLength: { value: 25, message: 'maximum 25 symbols' },
    })}/>
            {errors.email && (<material_1.Typography sx={{ color: 'red' }} variant="caption" role="alert">
                {(errors === null || errors === void 0 ? void 0 : errors.email) && ((_b = errors === null || errors === void 0 ? void 0 : errors.email) === null || _b === void 0 ? void 0 : _b.message)}
              </material_1.Typography>)}

            
            <material_1.TextField id="password" autoComplete="false" type={showPassword ? 'text' : 'password'} size="small" label={t('registrationPage.helperTextPassword')} sx={{ width: '100%' }} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                    <Lock_1.default />
                  </material_1.InputAdornment>),
            endAdornment: (<material_1.InputAdornment position="end">
                    <material_1.IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {showPassword ? (<VisibilityOff_1.default fontSize="small"/>) : (<Visibility_1.default fontSize="small"/>)}
                    </material_1.IconButton>
                  </material_1.InputAdornment>),
        }} variant="standard" margin="normal" {...register('password', {
        required: 'required',
        minLength: { value: 4, message: 'minimum 4 symbols' },
    })}/>
            {errors.password && (<material_1.Typography sx={{ color: 'red' }} variant="caption" role="alert">
                {(errors === null || errors === void 0 ? void 0 : errors.password) && ((_c = errors === null || errors === void 0 ? void 0 : errors.password) === null || _c === void 0 ? void 0 : _c.message)}
              </material_1.Typography>)}

            <material_1.Button type="submit" variant="contained" disabled={isLoading} sx={{
            backgroundColor: '#57b846d7',
            '&:hover': {
                backgroundColor: '#57b846',
            },
            border: 'none',
            borderRadius: '25px',
            width: '100%',
        }}>
              {t('registrationPage.formButton')}
            </material_1.Button>
          </material_1.Box>
        </material_1.CardContent>
      </material_1.Card>
      <material_1.Typography sx={{ mt: 3 }}>
        {t('registrationPage.additionalText')}{' '}
        <RegistrationPage_styled_1.StyledLink to="/login">
          {t('registrationPage.additionalTextLink')}
        </RegistrationPage_styled_1.StyledLink>
      </material_1.Typography>
    </material_1.Box>);
};
exports.default = RegistrationPage;
//# sourceMappingURL=RegistrationPage.jsx.map