import { render, screen } from '@testing-library/react';
import App from './App';
import { useIsDevCycleInitialized } from '@devcycle/react-client-sdk';

test('renders demo app', () => {
  render(<App />);
  const linkElement = screen.getByText(/demo application/i);
  expect(linkElement).toBeInTheDocument();
});

test('displays loading when DevCycle is not initialized', () => {
  useIsDevCycleInitialized.mockReturnValue(false)

  render(<App />);
  const loadingElement = screen.getByText(/initializing/i);
  expect(loadingElement).toBeInTheDocument();
});
