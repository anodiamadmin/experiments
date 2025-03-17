import './App.css';
import DashboardTestCases from './TestCaseMetrics/DashboardTestCases'
//import CustomLineChart from './Charts/CustomLineChart';
import TotalTestCasesChart from './Charts/TotalTestCasesChart';

function App() {
  return (
    <div className="App">
      <TotalTestCasesChart />
    </div>
  );
}

export default App;
