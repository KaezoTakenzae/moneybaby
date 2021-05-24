import { useState } from 'react';
import {createUseStyles} from 'react-jss';
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
          <p>Amount: {loan.amount}</p>
          <p>Annualised Return: {loan.annualised_return}</p>
          <p>Amount available: {loan.available}</p>
          <p>LTV: {loan.ltv}</p>
          <p>Term remaining: {loan.term_remaining}</p>
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
