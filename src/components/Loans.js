import { useState, useEffect } from 'react';
import {createUseStyles} from 'react-jss';
import addCommas from '../utils/addCommas';
import stripCommas from '../utils/stripCommas';
import formatAmount from '../utils/formatAmount';

import Loan from './Loan';

const useStyles = createUseStyles({
  root: {
    width: '100%',
    padding: 20,
    maxWidth: 768,
    margin: '0 auto',
    background: 'lightgrey',
    '@media (max-width: 767px)': {
      minHeight: '100vh'
    }
  },
  heading: {
    fontSize: 24,
    marginTop: 0,
    marginBottom: 20
  },
  totalAvailable: {
    textAlign: 'center'
  }
});

const Loans = ({ data }) => {
  const classes = useStyles();
  const [loans, updateLoans] = useState(data);
  const [totalAmountAvailable, setTAA] = useState(0);
  useEffect(() => {
    let taa = 0;
    loans.forEach(loan => {
      taa += parseFloat(stripCommas(loan.available), 10);
    })
    setTAA(taa);
  }, [loans]);

  const invest = (loanId, amount) => {
    let loanUpdate = {...loans.find(loan => loan.id === loanId)};
    let filteredLoans = loans.filter(loan => loan.id !== loanId);
    loanUpdate.available = addCommas(
      parseFloat(stripCommas(loanUpdate.available), 10) - parseFloat(stripCommas(amount), 10)
    );
    filteredLoans.push(loanUpdate);
    updateLoans(filteredLoans);
  }
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Current Loans</h1>
      {loans.map((loan, i) => (
        <Loan key={i} loan={loan} investFunc={invest} />
      ))}
      <div className={classes.totalAvailable}>
        Total amount available for investments: £{formatAmount(addCommas(totalAmountAvailable))}
      </div>
    </div>
  );
};

export default Loans;
