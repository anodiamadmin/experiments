import {  getDefaultEnvironmentFolder,getDefaultTrendSelector,getDefaultSelectorTrendFolder,getDefaultTestCaseResultFilename,
          getDefaultCoverageSummaryFilename,getDefaultDefectSummaryFilename,getDefaultChartXAxis,
          getTestCasesResultFileNames } 
    from "./extractConfigVariables";

let trendSel=await getDefaultTrendSelector();
if(sessionStorage.getItem('Trend_Selector') > 0 && trendSel!==sessionStorage.getItem('Trend_Selector'))
{
  trendSel=sessionStorage.getItem('Trend_Selector')
}
export const trendSelector=trendSel;
export const XAxisData=await getDefaultChartXAxis();

const environmentFolder = await getDefaultEnvironmentFolder();
const currentSelectorTrendFolder= await getDefaultSelectorTrendFolder();

const testCasesFolderPath = `/${environmentFolder}/${currentSelectorTrendFolder}/Test-Cases-Results/`;
const currentTestfileName = await getDefaultTestCaseResultFilename();

const coverageSummaryFolderPath = `/${environmentFolder}/${currentSelectorTrendFolder}/Coverage-Summary/`;
const currentCoverageFileName = await getDefaultCoverageSummaryFilename();

const defectSummaryFolderPath = `/${environmentFolder}/${currentSelectorTrendFolder}/Defect-Summary/`;
const currentDefectSummaryFileName = await getDefaultDefectSummaryFilename();

const fileNames = await getTestCasesResultFileNames();
// Fetch total test cases,passed test cases and failed test cases at once for each file
const fetchTestCases = fileNames.map(async (fileName) => {
  const filePath = `${testCasesFolderPath}${fileName}`;

  try {
    const response = await fetch(filePath);
    const data = await response.json();
    return ({
      total: data.numTotalTests ?? null,
      passed: data.numPassedTests ?? null,
      failed:data.numFailedTests ?? null
    });
  } catch (error) {
    console.error(`Error fetching ${fileName}:`, error);
    return {
      total: null,
      passed: null,
      failed:null
    };
  }
});

// Split them into two separate arrays if needed
export const historyTotalTestCases = fetchTestCases.map(promise =>
  promise.then(result => result.total)
);

export const historyPassedTestCases = fetchTestCases.map(promise =>
  promise.then(result => result.passed)
);

export const historyFailedTestCases = fetchTestCases.map(promise =>
  promise.then(result => result.failed)
);

const fetchCurrentTestResult = fetch(testCasesFolderPath + currentTestfileName)
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

const fetchTestSummaryResults = fetch(coverageSummaryFolderPath + currentCoverageFileName)
  .then(response => response.json())
  .catch(error => {
    console.error(`Error fetching ${currentCoverageFileName}: `, error);
    return {
      total: null,
      covered: null
    };
  });
export const total = fetchTestSummaryResults.then(data => data?.total?.statements?.total ?? 0);
export const covered = fetchTestSummaryResults.then(data => data?.total?.statements?.covered ?? 0);

const fetchDefectResults = fetch(defectSummaryFolderPath + currentDefectSummaryFileName)
  .then(response => response.json())
  .catch(error => {
    console.error(`Error fetching ${currentDefectSummaryFileName}:`, error);
    return {
      found_in_testing: null,
      found_in_production: null
    };
  });
export const found_in_testing = fetchDefectResults.then(data => data?.defects?.found_in_testing );
export const found_in_production = fetchDefectResults.then(data => data?.defects?.found_in_production);

// Last 6 coverage summary file names
// const coverageSummaryFileNames = [
//   '1-September-2024-coverage-summary.json',
//   '2-October-2024-coverage-summary.json',
//   '3-November-2024-coverage-summary.json',
//   '4-December-2024-coverage-summary.json',
//   '5-January-2025-coverage-summary.json',
//   '6-February-2025-coverage-summary.json'
// ];

// Fetch total,passed and failed test cases at once for each file
// const fetchCoverageSummary = coverageSummaryFileNames.map(async (fileName) => {
//   const filePath = `${testCasesFolderPath}${fileName}`;

//   try {
//     const response = await fetch(filePath);
//     const data = await response.json();
//     return ({
//       total: data?.total?.statements?.total ?? null,
//       covered: data?.total?.statements?.covered ?? null,
//     });
//   } catch (error) {
//     console.error(`Error fetching ${fileName}:`, error);
//     return {
//       total: null,
//       covered: null
//     };
//   }
// });

// // Split them into two separate arrays if needed
// export const historyTotalTestCases = fetchTestCases.map(promise =>
//   promise.then(result => result.total)
// );

// export const historyPassedTestCases = fetchTestCases.map(promise =>
//   promise.then(result => result.passed)
// );


// Last 6 defect summary file names
// const defectSummaryFileNames = [
//   '1-September-2024-defect-summary.json',
//   '2-October-2024-defect-summary.json',
//   '3-November-2024-defect-summary.json',
//   '4-December-2024-defect-summary.json',
//   '5-January-2025-defect-summary.json',
//   '6-February-2025-defect-summary.json'
// ];