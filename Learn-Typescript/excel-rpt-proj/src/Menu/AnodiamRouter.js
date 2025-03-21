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
        <Route path="/menu" element={<AnodiamTestCasesMenu />} />
        <Route path="/total-test-cases" element={<TotalTestCasesChart />} />
      </Routes>
    </Router>
  );
}