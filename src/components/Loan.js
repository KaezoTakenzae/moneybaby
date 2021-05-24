import { useState } from 'react';
import {createUseStyles} from 'react-jss';

import calculateTermRemaining from '../utils/calculateTermRemaining';
import formatPercentage from '../utils/formatPercentage';
import formatAmount from '../utils/formatAmount';

import Invest from './Invest';
import InvestButton from './InvestButton';

const useStyles = createUseStyles({
  root: {
    marginBottom: 20,
    margin: '0 auto',
    background: 'white',
    border: 'grey',
    padding: 8,
    position: 'relative',
    '@media (min-width: 768px)': {
      height: 80
    }
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  loanDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    '& p': {
      margin: 4,
      lineHeight: 1.2
    }
  },
  btnContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
});

const Loan = ({loan, investFunc}) => {
  const classes = useStyles();
  const [investing, setInvesting] = useState(false);
  return (
    <>
      <div className={classes.root} onClick={() => setInvesting(true)}>
        <div className={classes.title}>{loan.title}</div>
        <div className={classes.loanDetails}>
          <p>Amount: £{formatAmount(loan.amount)}</p>
          <p>Annualised Return: {formatPercentage(loan.annualised_return)}%</p>
          <p>Amount available: £{formatAmount(loan.available)}</p>
          <p>LTV: {formatPercentage(loan.ltv)}%</p>
          <p>Loan ends in: {calculateTermRemaining(loan.term_remaining)}</p>
          <p>Tranche: {loan.tranche}</p>
        </div>
        <div className={classes.btnContainer}>
          <InvestButton onClick={() => setInvesting(true)} />
        </div>
      </div>
      {investing ? <Invest investFunc={investFunc} loan={loan} closeFunc={() => setInvesting(false)} /> : null}
    </>
  );
};

export default Loan;
