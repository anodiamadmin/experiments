import * as fs from 'fs';
import * as path from 'path';
import * as ExcelJS from 'exceljs';

// File paths
const jestResultsPath = path.join(__dirname, 'test-results.json');
const excelOutputPath = path.join(__dirname, 'test-report.xlsx');

// Load Jest results JSON
const rawResults = fs.readFileSync(jestResultsPath, 'utf-8');
const jestResults = JSON.parse(rawResults);

// Create a new Excel workbook and sheet
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Test Report');

// Add Header Row
worksheet.columns = [
  { header: 'Test Suite', key: 'suite', width: 30 },
  { header: 'Test Case', key: 'testCase', width: 40 },
  { header: 'Status', key: 'status', width: 15 },
  { header: 'Execution Time (ms)', key: 'duration', width: 20 },
  { header: 'Date', key: 'date', width: 20 },
  { header: 'Error Message', key: 'error', width: 50 },
];

// Format timestamp into human-readable date
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toISOString().replace('T', ' ').split('.')[0]; // e.g., 2025-03-10 14:20:00
};

// Iterate through test suites
jestResults.testResults.forEach((suite: any) => {
  const suiteName = path.basename(suite.name);
  const testDate = formatDate(suite.startTime);

  suite.assertionResults.forEach((test: any) => {
    worksheet.addRow({
      suite: suiteName,
      testCase: test.title,
      status: test.status.toUpperCase(),
      duration: test.duration || 'N/A',
      date: testDate,
      error: test.failureMessages.join('\n') || 'N/A',
    });
  });
});

// Add summary sheet
const summary = workbook.addWorksheet('Summary');
summary.columns = [
  { header: 'Metric', key: 'metric', width: 30 },
  { header: 'Value', key: 'value', width: 20 },
];

// Calculate totals
const totalTests = jestResults.numTotalTests;
const passedTests = jestResults.numPassedTests;
const failedTests = jestResults.numFailedTests;
const startTime = formatDate(jestResults.startTime);
const endTime = formatDate(Date.now());

summary.addRow({ metric: 'Total Tests', value: totalTests });
summary.addRow({ metric: 'Passed Tests', value: passedTests });
summary.addRow({ metric: 'Failed Tests', value: failedTests });
summary.addRow({ metric: 'Start Time', value: startTime });
summary.addRow({ metric: 'End Time', value: endTime });

// Save workbook to file
workbook.xlsx.writeFile(excelOutputPath)
  .then(() => {
    console.log(`✅ Excel report generated successfully: ${excelOutputPath}`);
  })
  .catch((error) => {
    console.error('❌ Failed to generate Excel report:', error);
  });