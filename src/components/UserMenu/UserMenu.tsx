import React from 'react';

import { Box, IconButton, Typography } from '@mui/material';
import { Logout } from '@mui/icons-material';

const UserMenu: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" component="p">
        Welcome,{' '}
        <Typography variant="body1" component="span" sx={{ fontWeight: 800 }}>
          name
        </Typography>
      </Typography>
      <IconButton
        // variant="outlined"
        aria-label="log out"
        sx={{ color: 'red', marginLeft: '15px' }}
        // disabled={isLoading}
        type="button"
        // onClick={handleClick}
      >
        <Logout />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
