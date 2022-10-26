import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AccountButton} from './AccountButton'

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Simple DApp
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <AccountButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
