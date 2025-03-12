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
//export const totalLinesOfCoverage = fetchTestResults.then(data => data.t);