import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FlatwareIcon from '@mui/icons-material/Flatware';

export default function Header() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f2b135',
        // contrastText: '#fff',
        contrastText: '#29384b',
      },
      secondary: {
        main: '#4B709A',
      },
    },

    typography: {
      fontFamily: [
        'Candara',
        'Calibri',
        'Segoe',
        'Segoe UI',
        'Optima',
        'Arial',
        'sans-serif',
        'Noto Sans JP',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <FlatwareIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant='h5'
              component='div'
              sx={{ flexGrow: 1, fontWeight: 'bold' }}
            >
              私の BIZakaya
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
