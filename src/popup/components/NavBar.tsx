import styled from '@emotion/styled';

import { theme } from '../style/theme';

import Logo from '/images/ribbon.png';

const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid ${theme.palette.divider};
  display: flex;
  gap: ${theme.spacing(2)};
  padding-bottom: ${theme.spacing(2)};
  padding-left: ${theme.spacing(3)};
  padding-right: ${theme.spacing(3)};
  padding-top: ${theme.spacing(2)};
`;

const StyledImage = styled.img`
  height: 28px;
  width: 28px;
`;

export const NavBar = () => {
  return (
    <Container>
      <StyledImage src={Logo} /> Ribbon Reminder
    </Container>
  );
};
