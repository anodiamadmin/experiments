import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import AnodiamTestCasesDashboard from '../Dashboard/AnodiamTestCasesDasboard';
import AnodiamTestCasesMenu from './AnodiamTestCasesMenu';
import TotalTestCasesChartDetails from '../TestMetricsDetails/TotalTestCasesChartDetails';
import DefectDensityChartDetails from '../TestMetricsDetails/DefectDensityChartDetails';
import TestCoverageChartDetails from '../TestMetricsDetails/TestCoverageChartDetails';
import DefectLeakageChartDetails from '../TestMetricsDetails/DefectLeakageChartDetails';
import FlakyTestChartDetails from '../TestMetricsDetails/FlakyTestChartDetails';
import TestOptimizationChartDetails from '../TestMetricsDetails/TestOptimizationChartDetails';
import CICDBuildVerificationChartDetails from '../TestMetricsDetails/CICDBuildVerificationChartDetails';
import BuildStabilityChartDetails from '../TestMetricsDetails/BuildStabilityChartDetails';
import PipelineExecutionMinsChartDetails from '../TestMetricsDetails/PipelineExecutionMinsChartDetails';

export default function AnodiamRouter() {
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
          <Route path="test-coverage" element={<TestCoverageChartDetails />} />
          <Route path="defect-leakage" element={<DefectLeakageChartDetails />} />
          <Route path="flaky-tests" element={<FlakyTestChartDetails />} />
          <Route path="test-optimization" element={<TestOptimizationChartDetails />} />
          <Route path="cicd-build-verification" element={<CICDBuildVerificationChartDetails />} />
          <Route path="build-stability" element={<BuildStabilityChartDetails />} />
          <Route path="pipeline-execution-mins" element={<PipelineExecutionMinsChartDetails />} />
        </Route>
        {/* Catch-all Route (Optional) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}