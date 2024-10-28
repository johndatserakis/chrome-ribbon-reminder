import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
  interface Theme {
    // put everything back to Material UI `theme.vars`
    vars: MuiTheme['vars'];
  }
}
