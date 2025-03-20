import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnodiamTestCasesDashboard from '../Dashboard/AnodiamTestCasesDasboard';
import AnodiamTestCasesMenu from './AnodiamTestCasesMenu';
import TotalTestCasesChart from '../Dashboard/TotalTestCasesChart';

export default function AnodiamRouter() {
  return (
    <Router>
      <Routes>
        {/* Default Dashboard */}
        <Route path="/" element={<AnodiamTestCasesDashboard />} />

        {/* Menu Container with Nested Routes */}
        <Route path="/menu" element={<AnodiamTestCasesMenu />}>
          <Route path="total-test-cases" element={<TotalTestCasesChart />} />
          {/* <Route path="defect-density" element={<DefectDensityChart />} />
          <Route path="test-coverage" element={<TestCoverageChart />} /> */}
          {/* Add other nested routes here */}
        </Route>
      </Routes>
    </Router>
  );
}