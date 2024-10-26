import './style/index.scss';

import { ThemeProvider } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import { Popup } from './components/Popup';
import { MUI_MODAL_Z_INDEX } from './constants/mui';
import { theme } from './style/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Popup />
      <Toaster
        containerStyle={{ zIndex: MUI_MODAL_Z_INDEX + 1 }}
        position="bottom-center"
        reverseOrder
        toastOptions={{ duration: 2000 }}
      />
    </ThemeProvider>
  );
};
