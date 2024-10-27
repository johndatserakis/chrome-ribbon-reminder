import { Dispatch, SetStateAction } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { Ribbons } from '../../utils/types';
import { ContentContainer, FlexColumn } from '../Display';

import { RibbonListItem } from './RibbonListItem';

export interface RibbonFormData {
  title: string;
}

interface Props {
  setRibbons: Dispatch<SetStateAction<Ribbons>>;
  ribbons: Ribbons;
}

export const RibbonList = ({ setRibbons, ribbons }: Props) => {
  const sortedRibbons = [...ribbons].sort((a, b) => a.order - b.order);

  return (
    <>
      {sortedRibbons.length ? (
        <FlexColumn gap={4}>
          {ribbons.map((ribbon) => (
            <ContentContainer key={ribbon.id}>
              <Card variant="outlined">
                <CardContent>
                  <RibbonListItem
                    ribbon={ribbon}
                    ribbons={ribbons}
                    setRibbons={setRibbons}
                  />
                </CardContent>
              </Card>
            </ContentContainer>
          ))}
        </FlexColumn>
      ) : (
        <ContentContainer>
          <Card variant="outlined">
            <CardContent>
              <Typography color="neutral" gutterBottom={false} variant="body2">
                No ribbons yet! 😀.
              </Typography>
            </CardContent>
          </Card>
        </ContentContainer>
      )}
    </>
  );
};
