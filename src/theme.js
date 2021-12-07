import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#9b27b0',
    },
    secondary: {
      main: '#3cb027',
    },
  },
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
});
console.log(theme);
export default theme;
