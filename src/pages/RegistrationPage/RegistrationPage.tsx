import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import '../../i18n';

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
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useAppDispatch } from 'hooks/hooks';
import { registration } from 'redux/auth/authOperations';
import { useAuth } from 'redux/auth/authSelectors';
import { StyledLink } from './RegistrationPage.styled';

const RegistrationPage: React.FC = () => {
  type Inputs = {
    name: string;
    email: string;
    password: string;
  };

  const { isLoading } = useAuth();

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
  } = useForm<Inputs>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(registration(data));
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
            {t('registrationPage.title')}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            {/* input for name */}
            <TextField
              id="name"
              type="text"
              size="small"
              label={t('registrationPage.helperTextName')}
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
              {...register('name', {
                required: 'required',
                maxLength: { value: 25, message: 'maximum 25 symbols' },
              })}
            />
            {errors.name && (
              <Typography sx={{ color: 'red' }} variant="caption" role="alert">
                {errors?.name && errors?.name?.message}
              </Typography>
            )}

            {/* input for login */}
            <TextField
              id="login"
              type="email"
              size="small"
              label={t('registrationPage.helperTextLogin')}
              sx={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              margin="dense"
              {...register('email', {
                required: 'required',
                maxLength: { value: 25, message: 'maximum 25 symbols' },
              })}
            />
            {errors.email && (
              <Typography sx={{ color: 'red' }} variant="caption" role="alert">
                {errors?.email && errors?.email?.message}
              </Typography>
            )}

            {/* input for password */}
            <TextField
              id="password"
              autoComplete="false"
              type={showPassword ? 'text' : 'password'}
              size="small"
              label={t('registrationPage.helperTextPassword')}
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
              disabled={isLoading}
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
              {t('registrationPage.formButton')}
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Typography sx={{ mt: 3 }}>
        {t('registrationPage.additionalText')}{' '}
        <StyledLink to="/login">
          {t('registrationPage.additionalTextLink')}
        </StyledLink>
      </Typography>
    </Box>
  );
};

export default RegistrationPage;
