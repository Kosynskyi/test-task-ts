import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Typography,
  IconButton,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useAppDispatch } from 'hooks/hooks';
import { setAuth } from 'redux/auth/authSlice';
import { StyledLink } from './LoginPage.styled';

const LoginPage: React.FC = () => {
  interface IInputs {
    login: string;
    password: string;
  }

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputs>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IInputs> = data => {
    console.log(data);
    const auth = getAuth();
    const login = data.login + '@gmail.com';
    const password = data.password + '1';

    signInWithEmailAndPassword(auth, login, password)
      .then(({ user }) => {
        dispatch(
          setAuth({
            id: user.uid,
            user: data.login,
            token: user.uid,
          })
        );
      })
      .catch(console.error);

    reset();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '300px',
        }}
      >
        <CardContent>
          <Typography variant="subtitle2" align="center" fontSize="18px">
            {t('loginPage.title')}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            {/* input for login */}
            <TextField
              id="login"
              type="text"
              size="small"
              label={t('loginPage.helperTextLogin')}
              sx={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              margin="dense"
              {...register('login', {
                required: 'required',
                maxLength: { value: 25, message: 'maximum 25 symbols' },
              })}
            />
            {errors.login && (
              <Typography sx={{ color: 'red' }} variant="caption" role="alert">
                {errors?.login && errors?.login?.message}
              </Typography>
            )}

            {/* input for password */}
            <TextField
              id="password"
              autoComplete="false"
              type={showPassword ? 'text' : 'password'}
              size="small"
              label={t('loginPage.helperTextPassword')}
              sx={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOff fontSize="small" />
                      ) : (
                        <Visibility fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="standard"
              margin="normal"
              {...register('password', {
                required: 'required',
                minLength: { value: 4, message: 'minimum 4 symbols' },
              })}
            />
            {errors.password && (
              <Typography sx={{ color: 'red' }} variant="caption" role="alert">
                {errors?.password && errors?.password?.message}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#57b846d7',
                '&:hover': {
                  backgroundColor: '#57b846',
                },
                border: 'none',
                borderRadius: '25px',
                width: '100%',
              }}
            >
              {t('loginPage.formButton')}
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Typography sx={{ mt: 3 }}>
        {t('loginPage.additionalText')}{' '}
        <StyledLink to="/registration">
          {t('loginPage.additionalTextLink')}
        </StyledLink>
      </Typography>
    </Box>
  );
};

export default LoginPage;
