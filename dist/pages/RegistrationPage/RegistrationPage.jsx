"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
require("../../i18n");
const auth_1 = require("firebase/auth");
const material_1 = require("@mui/material");
const Person_1 = __importDefault(require("@mui/icons-material/Person"));
const Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
const Visibility_1 = __importDefault(require("@mui/icons-material/Visibility"));
const VisibilityOff_1 = __importDefault(require("@mui/icons-material/VisibilityOff"));
const hooks_1 = require("hooks/hooks");
const authSlice_1 = require("redux/auth/authSlice");
const RegistrationPage_styled_1 = require("./RegistrationPage.styled");
const RegistrationPage = () => {
    var _a, _b;
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const handleClickShowPassword = () => setShowPassword(show => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { register, handleSubmit, reset, formState: { errors }, } = (0, react_hook_form_1.useForm)({ mode: 'onBlur' });
    const onSubmit = data => {
        console.log(data);
        const auth = (0, auth_1.getAuth)();
        console.log(auth);
        const login = data.login + '@gmail.com';
        const password = data.password + '1';
        (0, auth_1.createUserWithEmailAndPassword)(auth, login, password)
            .then(({ user }) => {
            console.log(2222222222);
            console.log('user ', user);
            dispatch((0, authSlice_1.setAuth)({
                id: user.uid,
                user: data.login,
                token: user.uid,
            }));
        })
            .catch(console.error);
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
            
            <material_1.TextField id="login" type="text" size="small" label={t('registrationPage.helperTextLogin')} sx={{ width: '100%' }} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                    <Person_1.default />
                  </material_1.InputAdornment>),
        }} variant="standard" margin="dense" {...register('login', {
        required: 'required',
        maxLength: { value: 25, message: 'maximum 25 symbols' },
    })}/>
            {errors.login && (<material_1.Typography sx={{ color: 'red' }} variant="caption" role="alert">
                {(errors === null || errors === void 0 ? void 0 : errors.login) && ((_a = errors === null || errors === void 0 ? void 0 : errors.login) === null || _a === void 0 ? void 0 : _a.message)}
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
                {(errors === null || errors === void 0 ? void 0 : errors.password) && ((_b = errors === null || errors === void 0 ? void 0 : errors.password) === null || _b === void 0 ? void 0 : _b.message)}
              </material_1.Typography>)}

            <material_1.Button type="submit" variant="contained" sx={{
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