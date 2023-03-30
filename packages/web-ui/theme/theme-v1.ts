import {
  createTheme,
  responsiveFontSizes,
  Theme as MuiTheme,
} from '@mui/material/styles';

export interface ICustomTheme {
  background: {
    primary: string;
    secondary: string;
  };
}

// Re-declare the emotion theme to include properties of the MaterialUiTheme and custom props
declare module '@emotion/react' {
  export interface Theme extends MuiTheme, ICustomTheme {}
}

// Re-declare MUI theme to include custom properties
declare module '@mui/material/styles' {
  interface Theme extends ICustomTheme {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends ICustomTheme {}
}

// Create a theme instance.
let themeV1 = createTheme({
  background: {
    primary: 'rgba(15,15,15,1)',
    secondary: 'rgba(255,255,255,0.05)',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#26A69A',
      light: '#80CBC4',
      dark: '#00695C',
      contrastText: 'rgba(255,255,255,1)',
    },
    secondary: {
      main: '#4FC3F7',
      light: '#81D4FA',
      dark: '#03A9F4',
      contrastText: 'rgba(0,0,0,1)',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#ab47bc',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0,0,0,0.87)',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    htmlFontSize: 10,
    h1: {
      fontSize: '6rem',
    },
    h2: {
      fontSize: '3.75rem',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2.125rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
  },
  shape: {
    borderRadius: 24,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

themeV1 = responsiveFontSizes(themeV1);

export default themeV1;
