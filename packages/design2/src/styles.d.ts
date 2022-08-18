import { Palette } from '@mui/material/styles/createPalette';
import { Mixins } from '@mui/material/styles/createMixins';

export interface CustomMixins extends Mixins {
  sideBar: {
    width: number;
  };
  appBar: {
    maxHeight: number;
    minHeight: number;
  };
}

export interface CustomPalette extends Palette {
  my: {
    [key: string]: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    mixins: CustomMixins;
    palette: CustomPalette;
  }
}