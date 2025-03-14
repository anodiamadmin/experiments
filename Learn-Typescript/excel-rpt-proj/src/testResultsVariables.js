// testResultsVariables.js

// Fetching the data ONCE, and assigning values to variables.
const fetchTestResults = fetch('/test-cases-results.json')
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching test-results.json:', error);
    return {
      numTotalTests: null,
      numPassedTests: null,
      numFailedTests: null
    };
  });

export const TotalTestCases = fetchTestResults.then(data => data.numTotalTests);
export const PassedTestCases = fetchTestResults.then(data => data.numPassedTests);
export const FailedTestCases = fetchTestResults.then(data => data.numFailedTests);

const fetchTestSummaryResults = fetch('/coverage-summary.json')
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching test-results.json:', error);
    return {
      total: null,
      covered: null
    };
  });
export const total = fetchTestSummaryResults.then(data => data?.total?.lines?.total ?? 0);
export const covered = fetchTestSummaryResults.then(data => data?.total?.lines?.covered ?? 0);

const fetchDefectResults = fetch('/defect-summary.json')
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching test-results.json:', error);
    return {
      found_in_testing: null,
      found_in_production: null
    };
  });
export const found_in_testing = fetchDefectResults.then(data => data.defects.found_in_testing );
export const found_in_production = fetchDefectResults.then(data => data.defects.found_in_production);