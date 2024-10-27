import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const DEFAULT_SPACING = 4;

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: colors.grey[400],
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px', // Default for rest of card.
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 32,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette: {
    secondary: {
      main: colors.grey[600],
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: DEFAULT_SPACING, // Default is 8px.
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    button: {
      fontWeight: 'bold',
      textTransform: 'none',
    },
  },
});
