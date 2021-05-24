import { render, screen, fireEvent } from '@testing-library/react';
import Invest from '../components/Invest';

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

let closeFuncRun;
let investFuncRun;

describe('Invest', () => {
  beforeEach(() => {
    closeFuncRun = false;
    investFuncRun = false;
    render(<Invest investFunc={() => { investFuncRun = true; }} loan={loan} closeFunc={() => { closeFuncRun = true; }} />);
  });

  test('renders invest button', () => {
    const investButton = screen.getByRole('button');
    expect(investButton).toBeInTheDocument();
  });

  test('if invest value is empty func does not run', () => {
    const button = screen.getByRole('button');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    expect(closeFuncRun && investFuncRun).toBeFalsy();
  });

  test('invest input will only show numbers and to 2 decimal places', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello23.444friend34.65757' } } );
    expect(input.value).toEqual('23.44');
  });

  test('with valid number both invest and close funcs will run', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '56' } } );
    const button = screen.getByRole('button');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    expect(closeFuncRun && investFuncRun).toBeTruthy();
  });
})
