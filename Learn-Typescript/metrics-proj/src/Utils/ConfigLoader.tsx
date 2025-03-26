import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface TestCaseResults {
  total: number | null;
  passed: number | null;
  failed: number | null;
}

interface ConfigContextType {
  currentTestResults: TestCaseResults | null;
  loading: boolean;
  error: string | null;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigLoader: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTestResults, setCurrentTestResults] = useState<TestCaseResults | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("/anodiam-test-case-config.json");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const configData = await response.json();

        let def_trend_selector:number|null = Number(sessionStorage.getItem("Trend_Selector"));
        def_trend_selector = def_trend_selector ? parseInt(def_trend_selector.toString(), 10) : configData.Default_Trend_Selector;

        let testCasesFolderPath="",currentTestfileName=""
        if(def_trend_selector === 3)
        {
          testCasesFolderPath = `/${configData.Environment_Folder}/${configData.Trend_Selector_Last_3_Info.Current_Selector_Trend_Folder}/Test-Cases-Results/`;
          currentTestfileName = configData.Trend_Selector_Last_3_Info.Current_Test_Case_Result_Filename;
        }
        if(def_trend_selector === 6)
        {
          testCasesFolderPath = `/${configData.Environment_Folder}/${configData.Trend_Selector_Last_6_Info.Current_Selector_Trend_Folder}/Test-Cases-Results/`;
          currentTestfileName = configData.Trend_Selector_Last_6_Info.Current_Test_Case_Result_Filename;
        }
        if(def_trend_selector === 12)
        {
          testCasesFolderPath = `/${configData.Environment_Folder}/${configData.Trend_Selector_Last_12_Info.Current_Selector_Trend_Folder}/Test-Cases-Results/`;
          currentTestfileName = configData.Trend_Selector_Last_12_Info.Current_Test_Case_Result_Filename;
        }
        const currentTestResult = await fetch(testCasesFolderPath + currentTestfileName)
          .then((res) => res.json())
          .catch((err) => {
            console.error(`Error fetching ${currentTestfileName}:`, err);
            return { numTotalTests: null, numPassedTests: null, numFailedTests: null };
          });

        setCurrentTestResults({
          total: currentTestResult.numTotalTests,
          passed: currentTestResult.numPassedTests,
          failed: currentTestResult.numFailedTests,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return (
    <ConfigContext.Provider value={{ currentTestResults, loading, error }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigLoader");
  }
  return context;
};

// import React, { createContext, useContext,useState, useEffect } from "react";

// const configFileName = "/anodiam-test-case-config.json";

// interface TrendSelectorInfo {
//   Current_Selector_Trend_Folder?: string;
//   Current_Test_Case_Result_Filename?: string;
//   Current_Coverage_Summary_Filename?: string;
//   Current_Defect_Summary_Filename?: string;
//   Chart_X_Axis?: string[];
//   Test_Cases_Results_File_Names?: string[];
// }

// interface Config {
//   Environment_Folder: string | null;
//   Default_Trend_Selector: number | null;
//   Trend_Selector_Last_3_Info: TrendSelectorInfo;
//   Trend_Selector_Last_6_Info: TrendSelectorInfo;
//   Trend_Selector_Last_12_Info: TrendSelectorInfo;
// }

// interface LoadedConfig {
//   Default_Environment_Folder: string|null ;
//   Default_Trend_Selector: number | null;
//   Default_Selector_Trend_Folder: string;
//   Default_Test_Case_Result_Filename: string;
//   Default_Coverage_Summary_Filename: string;
//   Default_Defect_Summary_Filename: string;
//   Default_Chart_X_Axis: string[];
//   Test_Cases_Results_File_Names: string[];
// }

// interface TestCaseResults {
//   total: number | null;
//   passed: number | null;
//   failed: number | null;
// }

// // interface DefectSummary {
// //   found_in_testing: number | null;
// //   found_in_production: number | null;
// // }

// // interface CoverageSummary {
// //   total: number | null;
// //   covered: number | null;
// // }

// interface ConfigContextType {
//   currentTestResults: TestCaseResults | null;
//   loading: boolean;
//   error: string | null;
// }

// const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

// export const ConfigLoader : React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [config, setConfig] = useState<LoadedConfig | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const [currentTestResults, setCurrentTestResults] = useState<TestCaseResults | null>(null);

//   /*const [trendSelector, setTrendSelector] = useState<number | null>(null);
//   const [XAxisData, setXAxisData] = useState<string[]>([]);
//   const [testCasesResults, setTestCasesResults] = useState<TestCaseResults[]>([]);

//   const [coverageSummary, setCoverageSummary] = useState<CoverageSummary | null>(null);
//   const [defectSummary, setDefectSummary] = useState<DefectSummary | null>(null);*/

//   useEffect(() => {
//     const fetchConfig = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(configFileName);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const configData: Config = await response.json();

//         const Default_Environment_Folder = configData.Environment_Folder;

//         let def_trend_selector:number|null = Number(sessionStorage.getItem("Trend_Selector"));
//         def_trend_selector = def_trend_selector ? parseInt(def_trend_selector.toString(), 10) : configData.Default_Trend_Selector;

//         const trendData: TrendSelectorInfo =
//           def_trend_selector === 3 ? configData.Trend_Selector_Last_3_Info :
//           def_trend_selector === 6 ? configData.Trend_Selector_Last_6_Info :
//           def_trend_selector === 12 ? configData.Trend_Selector_Last_12_Info : {};

//         setConfig({
//           Default_Environment_Folder,
//           Default_Trend_Selector: def_trend_selector,
//           Default_Selector_Trend_Folder: trendData.Current_Selector_Trend_Folder || "",
//           Default_Test_Case_Result_Filename: trendData.Current_Test_Case_Result_Filename || "",
//           Default_Coverage_Summary_Filename: trendData.Current_Coverage_Summary_Filename || "",
//           Default_Defect_Summary_Filename: trendData.Current_Defect_Summary_Filename || "",
//           Default_Chart_X_Axis: trendData.Chart_X_Axis || [],
//           Test_Cases_Results_File_Names: trendData.Test_Cases_Results_File_Names || [],
//         });

//         const testCasesFolderPath = `/${config?.Default_Environment_Folder}/${config?.Default_Selector_Trend_Folder}/Test-Cases-Results/`;
//         const currentTestfileName = config?.Default_Test_Case_Result_Filename;
//         // const coverageSummaryFolderPath = `/${config?.Default_Environment_Folder}/${config?.Default_Selector_Trend_Folder}/Coverage-Summary/`;
//         // const currentCoverageFileName = config?.Default_Coverage_Summary_Filename;
//         // const defectSummaryFolderPath = `/${config?.Default_Environment_Folder}/${config?.Default_Selector_Trend_Folder}/Defect-Summary/`;
//         // const currentDefectSummaryFileName = config?.Default_Defect_Summary_Filename;

//         // const fileNames = config?.Test_Cases_Results_File_Names?? [];

//         // Fetch current test result
//         const currentTestResult = await fetch(testCasesFolderPath + currentTestfileName)
//           .then(response => response.json())
//           .catch(error => {
//             console.error(`Error fetching ${currentTestfileName}:`, error);
//             return { numTotalTests: null, numPassedTests: null, numFailedTests: null };
//           });

//         setCurrentTestResults({
//           total: currentTestResult.numTotalTests,
//           passed: currentTestResult.numPassedTests,
//           failed: currentTestResult.numFailedTests
//         });

//         // Fetch all test case results
//         /*const fetchedTestCases = await Promise.all(fileNames.map(async (fileName) => {
//           const filePath = `${testCasesFolderPath}${fileName}`;
//           try {
//             const response = await fetch(filePath);
//             const data = await response.json();
//             return {
//               total: data.numTotalTests ?? null,
//               passed: data.numPassedTests ?? null,
//               failed: data.numFailedTests ?? null
//             };
//           } catch (error) {
//             console.error(`Error fetching ${fileName}:`, error);
//             return { total: null, passed: null, failed: null };
//           }
//         }));

//         setTestCasesResults(fetchedTestCases);

//         // Fetch coverage summary
//         const fetchedCoverageSummary = await fetch(coverageSummaryFolderPath + currentCoverageFileName)
//         .then(response => response.json())
//         .catch(error => {
//           console.error(`Error fetching ${currentCoverageFileName}:`, error);
//           return { total: null, covered: null };
//         });

//         setCoverageSummary({
//         total: fetchedCoverageSummary?.total?.statements?.total ?? 0,
//         covered: fetchedCoverageSummary?.total?.statements?.covered ?? 0
//         });

//         // Fetch defect summary
//         const fetchedDefectSummary = await fetch(defectSummaryFolderPath + currentDefectSummaryFileName)
//           .then(response => response.json())
//           .catch(error => {
//             console.error(`Error fetching ${currentDefectSummaryFileName}:`, error);
//             return { found_in_testing: null, found_in_production: null };
//           });

//         setDefectSummary({
//           found_in_testing: fetchedDefectSummary?.defects?.found_in_testing ?? null,
//           found_in_production: fetchedDefectSummary?.defects?.found_in_production ?? null
//         }); */

//       } catch (error) {
//         setError(error instanceof Error ? error.message : "Unknown error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchConfig();
//   }, []);
// };