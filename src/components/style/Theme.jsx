import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#5B7CFD',
      text: '#222222',
      warning: '#d33c40',
      bg: '#fff',
    },
    secondary: {
      main: '#fff',
      bg: '#fff',
    },
    hover: {
      text: '#fff',
      bg: '#4F70DD',
      border: '#888',
    },
    muted: {
      text: '#888',
      bg: '#ddd',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeight: 400,
  },
});
