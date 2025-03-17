const fileNames = [
    'September-2024-test-cases-results.json',
    'October-2024-test-cases-results.json',
    'November-2024-test-cases-results.json',
    'December-2024-test-cases-results.json',
    'January-2025-test-cases-results.json',
    'February-2025-test-cases-results.json'
  ];
  
  export const historyTotalTestCases = fileNames.map((fileName) => {
    const filePath = `/charts/${fileName}`;
  
    return fetch(filePath)
      .then((response) => response.json())
      .then((data) => data.numTotalTests)
      .catch((error) => {
        console.error(`Error fetching ${fileName}:`, error);
        return null; // Return null if error occurs
      });
  });  