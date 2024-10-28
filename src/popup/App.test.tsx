import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { NavBar } from './components/NavBar';

test('renders the NavBar component', () => {
  render(<NavBar />);
  const appElement = screen.getByText(/Ribbon Reminder/i);
  expect(appElement).toBeInTheDocument();
});
