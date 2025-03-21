import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnodiamTestCasesDashboard from '../Dashboard/AnodiamTestCasesDasboard';
import AnodiamTestCasesMenu from './AnodiamTestCasesMenu';

export default function AnodiamRouter() {
  return (
    <Router>
      <Routes>
        {/* Default Dashboard */}
        <Route path="/" element={<AnodiamTestCasesDashboard />} />
        <Route path="/menu" element={<AnodiamTestCasesMenu />} />
      </Routes>
    </Router>
  );
}