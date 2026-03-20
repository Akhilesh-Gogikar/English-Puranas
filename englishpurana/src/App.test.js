import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the strategy-led Simple Puranas homepage', () => {
  render(<App />);
  expect(screen.getByText(/Simple Puranas can become more than a reading archive/i)).toBeInTheDocument();
  expect(screen.getByText(/Five repeatable show formats/i)).toBeInTheDocument();
  expect(screen.getByText(/90-day execution plan/i)).toBeInTheDocument();
});
