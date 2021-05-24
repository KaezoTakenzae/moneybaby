import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'yellow',
  }
});

const InvestButton = ({onClick}) => {
  const classes = useStyles();
  return (
    <button className={classes.button} onClick={onClick}>INVEST</button>
  );
};

export default InvestButton;
