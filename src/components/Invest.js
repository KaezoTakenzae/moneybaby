import { useState } from 'react';
import {createUseStyles} from 'react-jss';
import addCommas from '../utils/addCommas';
import stripCommas from '../utils/stripCommas';
import InvestButton from './InvestButton';

const useStyles = createUseStyles({
  background: {
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 99
  },
  modal: {
    width: 350,
    height: 250,
    padding: 8,
    background: 'white',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'scroll',
    zIndex: 100
  },
  heading: {
    margin: 4,
    fontSize: 20,
  },
  form: {
    width: '100%',
    display: 'flex'
  },
  invest: {
    height: 40,
    marginRight: 8,
    flex: 1
  }
});

const Invest = ({loan, investFunc, closeFunc}) => {
  const classes = useStyles();
  const [investAmount, setInvestAmount] = useState('');

  const onChange = event => {
    let newValue = stripCommas(event.target.value);
    newValue = newValue.replace(/[^0-9.]/g, '');
    let parts = newValue.split('.');
    let outputValue = parts[0];
    outputValue += newValue.indexOf('.') >= 0 ? '.' : '';
    outputValue += parts[1] ? parts[1].substr(0,2) : '';
    setInvestAmount(addCommas(outputValue));
  }

  const onInvest = event => {
    event.preventDefault();
    if (Number.isNaN(parseFloat(investAmount))) {
      return;
    }
    investFunc(loan.id, investAmount);
    closeFunc();
  }

  return (
    <>
      <div className={classes.background} onClick={closeFunc} />
      <div className={classes.modal}>
        <h1 className={classes.heading}>Invest in Loan</h1>
        <p>{loan.title}</p>
        <p>Amount available: {loan.available}</p>
        <p>Loan ends in: {loan.term_remaining}</p>
        <p>Investment amount (£)</p>

        <form className={classes.form} onSubmit={onInvest}>
          <input onChange={onChange} value={investAmount} className={classes.invest} />
          <InvestButton />
        </form>
      </div>
    </>
  );
};

export default Invest;
