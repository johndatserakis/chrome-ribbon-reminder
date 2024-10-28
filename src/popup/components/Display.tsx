import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Box, colors, Typography } from '@mui/material';

import { theme } from '../style/theme';

export const FlexColumn = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled(Box)`
  display: flex;
`;

export const ContentContainer = styled.div`
  padding-left: ${theme.spacing(3)};
  padding-right: ${theme.spacing(3)};
`;

interface SectionLabelProps {
  children: ReactNode;
}

const StyledSectionLabel = styled(Typography)`
  color: ${colors.grey[600]};
`;

export const SectionLabel = ({ children }: SectionLabelProps) => (
  <StyledSectionLabel textTransform="uppercase" variant="caption">
    {children}
  </StyledSectionLabel>
);
