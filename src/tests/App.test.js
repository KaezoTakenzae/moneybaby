import { render, screen } from '@testing-library/react';
import App from '../App';

test('app renders', () => {
  render(<App />);
  const loansElement = screen.getByText(/current loans/i);
  expect(loansElement).toBeInTheDocument();
});
