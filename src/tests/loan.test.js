import { render, screen, fireEvent } from '@testing-library/react';
import Loan from '../components/Loan';

let loan = {
    "id": "1",
    "title": "Simple loan title",
    "tranche": "A",
    "available": "11,959",
    "annualised_return": "8.60",
    "term_remaining": "864000",
    "ltv": "48.80",
    "amount": "85,754"
};
describe('Loan', () => {
  beforeEach(() => {
    render(<Loan loan={loan} investFunc={() => {}} />);
  });

  test('renders invest button', () => {
    const investButton = screen.getByText(/invest/i);
    expect(investButton).toBeInTheDocument();
  });

  test('loan can be clicked and opens invest modal', () => {
    const button = screen.getByRole('button');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    const investModal = screen.getByText(/invest in loan/i);
    expect(investModal).toBeInTheDocument();
  });

  test('invest button can be clicked and opens invest modal', () => {
    const button = screen.getByText(/simple loan title/i);
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    const investModal = screen.getByText(/invest in loan/i);
    expect(investModal).toBeInTheDocument();
  });
})
