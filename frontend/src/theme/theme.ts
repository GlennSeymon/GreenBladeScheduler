import { createTheme, type PaletteMode } from '@mui/material/styles';

// GreenBlade Lawn Care brand palette: forest green primary (from the logo mark) with a warm
// amber/sun accent as secondary. Semantic colours (error/success) are chosen to stay legible
// against both, and the dark values extend the same brand rather than being a separate scheme.
export const brandGreen = '#1b5e20';
const brandYellow = '#f5b921';

const lightSurface = '#f7f9f6';
const lightText = '#1b2a1e';
const lightTextSecondary = '#5b6b5e';
const lightDivider = '#e2e8e2';
const lightError = '#c62828';
const successGreen = '#2e9e5b';

const darkBackground = '#0e1712';
const darkPaper = '#16211a';
const darkPrimary = '#4caf50'; // lightened brandGreen for AA contrast on a dark ground
const darkText = '#eef2ee';
const darkTextSecondary = '#a9b6ab';
const darkError = '#ff6659'; // lightened lightError for AA contrast on a dark ground

export function getTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? brandGreen : darkPrimary,
        contrastText: '#ffffff',
      },
      secondary: {
        main: brandYellow,
        contrastText: '#000000',
      },
      error: {
        main: mode === 'light' ? lightError : darkError,
      },
      success: {
        main: successGreen,
      },
      background: {
        default: mode === 'light' ? lightSurface : darkBackground,
        paper: mode === 'light' ? '#ffffff' : darkPaper,
      },
      text: {
        primary: mode === 'light' ? lightText : darkText,
        secondary: mode === 'light' ? lightTextSecondary : darkTextSecondary,
      },
      ...(mode === 'light' && { divider: lightDivider }),
    },
  });
}
