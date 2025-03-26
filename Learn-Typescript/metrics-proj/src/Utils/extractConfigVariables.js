const configFileName = "/anodiam-test-case-config.json";

/**
 * Fetches the config anodiam-test-case-config.json file asynchronously.
 */
const fetchConfigVariables = async () => {
  try {
    const response = await fetch(configFileName);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching " + configFileName + ": ", error);
    return {
      Environment_Folder: null,
      Default_Trend_Selector: null,
      Trend_Selector_Last_3_Info: {},
      Trend_Selector_Last_6_Info: {},
      Trend_Selector_Last_12_Info: {},
    };
  }
};

/**
 * Loads the configuration and selects the correct trend selector data.
 */
const loadConfig = async () => {
  const configData = await fetchConfigVariables();

  const Default_Environment_Folder = configData.Environment_Folder;
  
  // Get trend selector (from sessionStorage or default)
  let def_trend_selector = sessionStorage.getItem("Trend_Selector");
  def_trend_selector = def_trend_selector ? parseInt(def_trend_selector, 10) : configData.Default_Trend_Selector;

  // Determine which trend selector data to use
  const trendData =
    def_trend_selector === 3 ? configData.Trend_Selector_Last_3_Info :
    def_trend_selector === 6 ? configData.Trend_Selector_Last_6_Info :
    def_trend_selector === 12 ? configData.Trend_Selector_Last_12_Info : {};

  return {
    Default_Environment_Folder,
    Default_Trend_Selector: def_trend_selector,
    Default_Selector_Trend_Folder: trendData.Current_Selector_Trend_Folder || "",
    Default_Test_Case_Result_Filename: trendData.Current_Test_Case_Result_Filename || "",
    Default_Coverage_Summary_Filename: trendData.Current_Coverage_Summary_Filename || "",
    Default_Defect_Summary_Filename: trendData.Current_Defect_Summary_Filename || "",
    Default_Chart_X_Axis: trendData.Chart_X_Axis || [],
    Test_Cases_Results_File_Names:trendData.Test_Cases_Results_File_Names||[]
  };
};

// Export functions that return Promises for each config value
export const getDefaultEnvironmentFolder = async () => (await loadConfig()).Default_Environment_Folder;
export const getDefaultTrendSelector = async () => (await loadConfig()).Default_Trend_Selector;
export const getDefaultSelectorTrendFolder = async () => (await loadConfig()).Default_Selector_Trend_Folder;
export const getDefaultTestCaseResultFilename = async () => (await loadConfig()).Default_Test_Case_Result_Filename;
export const getDefaultCoverageSummaryFilename = async () => (await loadConfig()).Default_Coverage_Summary_Filename;
export const getDefaultDefectSummaryFilename = async () => (await loadConfig()).Default_Defect_Summary_Filename;
export const getDefaultChartXAxis = async () => (await loadConfig()).Default_Chart_X_Axis;

/* Later on filenames can be retrieved from folder by applying API as files can be accessed from public 
    using API for security reasons */
export const getTestCasesResultFileNames= async () => (await loadConfig()).Test_Cases_Results_File_Names;