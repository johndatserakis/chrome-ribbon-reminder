import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { NavBar } from './components/NavBar';

// TODO:  Only testing one small thing because chrome storage mocking needs
// some work.
test('renders the NavBar component', () => {
  render(<NavBar />);
  const appElement = screen.getByText(/Ribbon Reminder/i);
  expect(appElement).toBeInTheDocument();
});
