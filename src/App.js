import Loans from './components/Loans';
import data from './data/current-loans.json';

function App() {
  return (
    <Loans data={data.loans} />
  );
}

export default App;
