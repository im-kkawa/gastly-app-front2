import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function ApplicationBar() {
  // 理想は全コンポーネントでthemeを共有する状態だが、色表示がうまく行かないため個別で設定する。
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        contrastText: '#fff',
      },
      secondary: {
        main: '#29384b',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ height: '35px' }}>
          <Toolbar>
            <Stack
              direction='row'
              spacing={4}
              sx={{ ml: '36.5rem', mb: '1.7rem' }}
            >
              <Button
                variant='text'
                size='small'
                color='secondary'
                sx={{ fontWeight: 'bold' }}
              >
                お店検索 / 評価登録
              </Button>
              <Button
                variant='text'
                size='small'
                color='secondary'
                sx={{ fontWeight: 'bold' }}
              >
                新しいお店の登録
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
