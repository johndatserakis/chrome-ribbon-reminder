import styled from '@emotion/styled';

import { useStorage } from '../hooks/useStorage';
import { BACKGROUND_COLOR } from '../style/colors';
import { theme } from '../style/theme';

import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { RibbonList } from './RibbonList/RibbonList';

const AppContainer = styled.div`
  background: ${BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
  padding-bottom: ${theme.spacing(3)};
  position: relative;
`;

export const Popup = () => {
  const { ribbons, setRibbons } = useStorage();

  return (
    <AppContainer>
      <NavBar />
      <RibbonList ribbons={ribbons} setRibbons={setRibbons} />
      <Footer />
    </AppContainer>
  );
};
