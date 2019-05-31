import { createTheme } from '@atlaskit/theme';

const PRIMARY_COLOR = '#172B4D';
const theme = {
  h1: {
    textColor: PRIMARY_COLOR,
  },
  panel: {
    header: {
      textColor: '#fff',
      backgroundColor: PRIMARY_COLOR,
    },
    body: {
      borderColor: PRIMARY_COLOR,
    },
  },
};
type ThemeTokens = typeof theme;

export default createTheme<ThemeTokens, Object>(() => theme);
