const fileNames = [
  'September-2024-test-cases-results.json',
  'October-2024-test-cases-results.json',
  'November-2024-test-cases-results.json',
  'December-2024-test-cases-results.json',
  'January-2025-test-cases-results.json',
  'February-2025-test-cases-results.json'
];

// Fetch both total and passed test cases at once for each file
const fetchTestCases = fileNames.map((fileName) => {
  const filePath = `/dev-env/last-6-test-cases-results/${fileName}`;

  return fetch(filePath)
    .then((response) => response.json())
    .then((data) => ({
      total: data.numTotalTests ?? null,
      passed: data.numPassedTests ?? null
    }))
    .catch((error) => {
      console.error(`Error fetching ${fileName}:`, error);
      return {
        total: null,
        passed: null
      };
    });
});

// Split them into two separate arrays if needed
export const historyTotalTestCases = fetchTestCases.map(promise =>
  promise.then(result => result.total)
);

export const historyPassedTestCases = fetchTestCases.map(promise =>
  promise.then(result => result.passed)
);

const currentTestfileName = 'February-2025-test-cases-results.json';

const fetchCurrentTestResult = fetch('/dev-env/last-6-test-cases-results/' + currentTestfileName)
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching ' + currentTestfileName + ': ', error);
    return {
      numTotalTests: null,
      numPassedTests: null,
      numFailedTests: null
    };
  });

export const currentTotalTestCases  = fetchCurrentTestResult.then(data => data.numTotalTests);
export const currentPassedTestCases = fetchCurrentTestResult.then(data => data.numPassedTests);
export const currentFailedTestCases = fetchCurrentTestResult.then(data => data.numFailedTests);

const fetchTestSummaryResults = fetch('/dev-env/last-6-test-cases-results/coverage-summary.json')
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching coverage-summary.json:', error);
    return {
      total: null,
      covered: null
    };
  });
export const total = fetchTestSummaryResults.then(data => data?.total?.lines?.total ?? 0);
export const covered = fetchTestSummaryResults.then(data => data?.total?.lines?.covered ?? 0);

const fetchDefectResults = fetch('/dev-env/last-6-test-cases-results/defect-summary.json')
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching defect-summary.json:', error);
    return {
      found_in_testing: null,
      found_in_production: null
    };
  });
export const found_in_testing = fetchDefectResults.then(data => data.defects.found_in_testing );
export const found_in_production = fetchDefectResults.then(data => data.defects.found_in_production);