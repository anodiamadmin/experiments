"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var ExcelJS = require("exceljs");
// File paths
var jestResultsPath = path.join(__dirname, 'test-results.json');
var excelOutputPath = path.join(__dirname, 'test-report.xlsx');
// Load Jest results JSON
var rawResults = fs.readFileSync(jestResultsPath, 'utf-8');
var jestResults = JSON.parse(rawResults);
// Create a new Excel workbook and sheet
var workbook = new ExcelJS.Workbook();
var worksheet = workbook.addWorksheet('Test Report');
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
var formatDate = function (timestamp) {
    var date = new Date(timestamp);
    return date.toISOString().replace('T', ' ').split('.')[0]; // e.g., 2025-03-10 14:20:00
};
// Iterate through test suites
jestResults.testResults.forEach(function (suite) {
    var suiteName = path.basename(suite.name);
    var testDate = formatDate(suite.startTime);
    suite.assertionResults.forEach(function (test) {
        worksheet.addRow({
            suite: suiteName,
            testCase: test.title,
            status: test.status.toUpperCase(),
            duration: test.duration || 'N/A',
            date: testDate,
            error: test.failureMessages.join('\n') || 'N/A'
        });
    });
});
// Add summary sheet
var summary = workbook.addWorksheet('Summary');
summary.columns = [
    { header: 'Metric', key: 'metric', width: 30 },
    { header: 'Value', key: 'value', width: 20 },
];
// Calculate totals
var totalTests = jestResults.numTotalTests;
var passedTests = jestResults.numPassedTests;
var failedTests = jestResults.numFailedTests;
var startTime = formatDate(jestResults.startTime);
var endTime = formatDate(Date.now());
summary.addRow({ metric: 'Total Tests', value: totalTests });
summary.addRow({ metric: 'Passed Tests', value: passedTests });
summary.addRow({ metric: 'Failed Tests', value: failedTests });
summary.addRow({ metric: 'Start Time', value: startTime });
summary.addRow({ metric: 'End Time', value: endTime });
// Save workbook to file
workbook.xlsx.writeFile(excelOutputPath)
    .then(function () {
    console.log("\u2705 Excel report generated successfully: ".concat(excelOutputPath));
})["catch"](function (error) {
    console.error('❌ Failed to generate Excel report:', error);
});
