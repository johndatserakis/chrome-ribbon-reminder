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
import { Fragment } from 'react/jsx-runtime';

import { ContentContainer, FlexColumn, SectionLabel } from './Display';

const StyledListItem = styled(ListItem)`
  padding: 8px 4px;
`;

const sections = [
  {
    icon: '💻',
    text: 'View Ribbon Reminder in the Chrome Store.',
    link: 'https://chromewebstore.google.com/detail/ribbon-reminder/ahdegcekcodbkojmccabgmfcfddabnbd',
    linkText: 'Ribbon Reminder',
  },
  {
    icon: '🔗',
    text: 'Tired of trying to tell the difference between blue and dark-purple links at 2 a.m? Check out another extension of mine, Link Control.',
    link: 'https://chromewebstore.google.com/detail/link-control/dibehcgiapedhoehgpinmkdmahlheekc',
    linkText: 'Link Control',
  },
  {
    icon: '☕️',
    text: 'Enjoying Ribbon Reminder? Buy me a coffee to support its development.',
    link: 'https://ko-fi.com/johndatserakis',
    linkText: 'Buy me a coffee',
  },
  {
    icon: '🔖',
    text: 'Hosting an event? Handle digital RSVPs with app, RSVP Keeper.',
    link: 'https://www.rsvpkeeper.com/?ref=ribbon-reminder',
    linkText: 'RSVP Keeper',
  },
  {
    icon: '👋',
    text: 'See more from me, John Datserakis. I like to make (and break) things.',
    link: 'https://www.johndatserakis.com/?ref=ribbon-reminder',
    linkText: 'John Datserakis',
  },
  {
    icon: '🙋‍♂️',
    text: 'Need help? Shoot me an email. My email’s on my website.',
    link: 'https://www.johndatserakis.com/?ref=ribbon-reminder',
    linkText: 'website',
  },
  {
    icon: '🎧',
    text: 'Powered by music. Made in Boston.',
    link: 'https://www.youtube.com/watch?v=NBxDI_SYUtI',
    linkText: 'music',
  },
];

export const Footer = () => (
  <ContentContainer>
    <Card variant="outlined">
      <CardContent>
        <FlexColumn gap={2}>
          <SectionLabel>Additional Links</SectionLabel>
          <List>
            {sections.map(({ icon, text, link, linkText }, index) => {
              const [preText, postText] = text.split(linkText);
              return (
                <Fragment key={index}>
                  <StyledListItem>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <Typography variant="body2">
                      {preText}
                      <Link
                        href={link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {linkText}
                      </Link>
                      {postText}
                    </Typography>
                  </StyledListItem>
                  {index !== sections.length - 1 && <Divider />}
                </Fragment>
              );
            })}
          </List>
        </FlexColumn>
      </CardContent>
    </Card>
  </ContentContainer>
);
