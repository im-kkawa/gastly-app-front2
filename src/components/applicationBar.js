import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function ApplicationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit'>お店を検索</Button>
          <Button color='inherit'>お店と評価を登録</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
