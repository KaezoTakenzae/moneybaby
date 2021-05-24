import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Loans from '../components/Loans';

let loans = [{
    "id": "1",
    "title": "Simple loan title",
    "tranche": "A",
    "available": "12,500",
    "annualised_return": "8.60",
    "term_remaining": "864000",
    "ltv": "48.80",
    "amount": "85,754"
}];
describe('Loans', () => {
  test('loans renders and does not crash', () => {
    render(<Loans data={loans} />);
    const investButton = screen.getByRole('button');
    expect(investButton).toBeInTheDocument();
  });

  test('confirm total amount will decrease when loan is invested in', async () => {
    const { container } = render(<Loans data={loans} />);
    const button = screen.getByRole('button');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '500' } } );
    const form = container.querySelector('form');
    form.submit();
    const availableAmount = container.querySelector('div[class^="totalAvailable"]');
    await waitFor(() => {
      expect(availableAmount.innerHTML.indexOf('12,000')).toBeGreaterThanOrEqual(0);
    }, { timeout: 1000 });
  });
})
