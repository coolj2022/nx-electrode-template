import React from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const palette = {
  blueInk: '#041F41',
  blueInk2: '#0071DC',
  primaryPink: '#DD1385',
  myBlue: '#0171CE',
  green: '#54A546',
};

const theme = createTheme(
  {
    palette: {
      primary: {
        main: palette.blueInk2,
      },
      secondary: {
        main: palette.primaryPink,
      },
      info: {
        main: palette.myBlue,
      },
      success: {
        main: palette.green,
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h6: {
        color: palette.blueInk2,
      },
    },
  },
  {
    palette: {
      my: palette,
    },
    mixins: {
      sideBar: {
        width: 320,
        innerWidth: 288,
      },
      appBar: {
        maxHeight: 64,
        minHeight: 48,
      },
    },
  }
);

type PropsType = {
  children?: React.ReactNode;
};

export const ThemeProvider = (props: PropsType) => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </>
  );
};
