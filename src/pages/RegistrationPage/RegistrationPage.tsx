import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

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

import { StyledLink } from './RegistrationPage.styled';

const RegistrationPage: React.FC = () => {
  type Inputs = {
    login: string;
    password: string;
  };

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
    console.log(data);

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
            Ласкаво просимо на формі реєстрації нового користувача
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
              label="Login"
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
              label="Password"
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
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Typography sx={{ mt: 3 }}>
        Вже маєш аккаунт? Тоді просто переходь{' '}
        <StyledLink to="/login">сюди</StyledLink>
      </Typography>
    </Box>
  );
};

export default RegistrationPage;
