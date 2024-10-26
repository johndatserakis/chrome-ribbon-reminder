import styled from '@emotion/styled';
import {
  Card,
  CardContent,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material';

import { ContentContainer, FlexColumn, SectionLabel } from './Display';

const StyledListItem = styled(ListItem)`
  padding: 8px 4px;
`;

export const Footer = () => (
  <ContentContainer>
    <Card variant="outlined">
      <CardContent>
        <FlexColumn gap={3}>
          <SectionLabel>Additional Links</SectionLabel>
          <List>
            <Divider />
            <StyledListItem>
              <ListItemIcon>💻</ListItemIcon>
              <Typography variant="body2">
                View{' '}
                <Link
                  href="https://chrome.google.com/webstore/detail/ribbon-reminder/dibehcgiapedhoehgpinmkdmahlheekc"
                  rel="noopener noreferred noreferrer"
                  target="_blank"
                >
                  Ribbon Reminder
                </Link>{' '}
                in the Chrome Store.
              </Typography>
            </StyledListItem>
            <Divider />
            <StyledListItem>
              <ListItemIcon>☕️</ListItemIcon>
              <Typography variant="body2">
                Enjoying Ribbon Reminder?{' '}
                <Link
                  href="https://ko-fi.com/johndatserakis"
                  rel="noopener noreferred noreferrer"
                  target="_blank"
                >
                  Buy me a coffee
                </Link>{' '}
                to support its development.
              </Typography>
            </StyledListItem>
            <Divider />
            <StyledListItem>
              <ListItemIcon>🔖</ListItemIcon>
              <Typography variant="body2">
                Hosting an event? Handle digital RSVP&apos;s with another app of
                mine,{' '}
                <Link
                  href="https://www.rsvpkeeper.com/?ref=ribbon-reminder"
                  rel="noopener noreferred noreferrer"
                  target="_blank"
                >
                  RSVP Keeper
                </Link>
                .
              </Typography>
            </StyledListItem>
            <Divider />
            <StyledListItem>
              <ListItemIcon>👋</ListItemIcon>
              <Typography variant="body2">
                See more from{' '}
                <Link
                  href="https://www.johndatserakis.com/?ref=ribbon-reminder"
                  rel="noopener noreferred noreferrer"
                  target="_blank"
                >
                  John Datserakis
                </Link>
                . I like to make (and break) things.
              </Typography>
            </StyledListItem>
            <Divider />
            <StyledListItem>
              <ListItemIcon>🙋‍♂️</ListItemIcon>
              <Typography variant="body2">
                Need help? Shoot me an email. My email&apos;s on my{' '}
                <Link
                  href="https://www.johndatserakis.com/?ref=ribbon-reminder"
                  rel="noopener noreferred noreferrer"
                  target="_blank"
                >
                  website
                </Link>
                .
              </Typography>
            </StyledListItem>
            <Divider />
            <StyledListItem>
              <ListItemIcon>🎧</ListItemIcon>
              <Typography variant="body2">
                Powered by{' '}
                <Link
                  href="https://www.youtube.com/watch?v=Ibh_W_SIAb4"
                  rel="noopener noreferred noreferrer"
                  target="_blank"
                >
                  music
                </Link>
                . Made in Boston.
              </Typography>
            </StyledListItem>
            <Divider />
          </List>
        </FlexColumn>
      </CardContent>
    </Card>
  </ContentContainer>
);
