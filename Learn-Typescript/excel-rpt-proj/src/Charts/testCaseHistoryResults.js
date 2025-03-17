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
  const filePath = `/charts/${fileName}`;

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