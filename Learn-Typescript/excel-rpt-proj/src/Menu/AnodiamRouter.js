import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import AnodiamTestCasesDashboard from '../Dashboard/AnodiamTestCasesDasboard';
import AnodiamTestCasesMenu from './AnodiamTestCasesMenu';
import TotalTestCasesChartDetails from '../TestMetricsDetails/TotalTestCasesChartDetails';
import DefectDensityChartDetails from '../TestMetricsDetails/DefectDensityChartDetails';

export default function AnodiamRouter() {
  const ShowMessage=()=>{ return <h2>Welcome to Test Metrics Details</h2>}
  return (
    <Router>
      <Routes>
        {/* Default Dashboard Route */}
        <Route path="/" element={<AnodiamTestCasesDashboard />} />
        {/* Menu Layout with Nested Routes */}
        <Route path="/menu" element={<AnodiamTestCasesMenu />}>
          {/* <Route index element={<Navigate to="total-test-cases" replace />} /> */}
          <Route path="total-test-cases" element={<TotalTestCasesChartDetails />} />
          <Route path="defect-density" element={<DefectDensityChartDetails />} />
          <Route path="test-coverage" element={<ShowMessage />} />
          <Route path="defect-leakage" element={<ShowMessage />} />
          <Route path="flaky-tests" element={<ShowMessage />} />
          <Route path="test-optimization" element={<ShowMessage />} />
          <Route path="cicd-build-verification" element={<ShowMessage />} />
          <Route path="build-stability" element={<ShowMessage />} />
          <Route path="pipeline-execution-mins" element={<ShowMessage />} />
        </Route>
        {/* Catch-all Route (Optional) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}