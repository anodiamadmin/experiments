const configFileName="anodiam-test-case-config.json"

const fetchConfigVariables = fetch(configFileName)
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching ' + configFileName + ': ', error);
    return {
      Environment_Folder: null,
      Default_Trend_Selector: null,
      Current_Test_Case_Result_Filename: null,
      Current_Coverage_Summary_Filename:null,
      Current_Defect_Summary_Filename:null,
      Chart_X_axis:null
    };
  });

  export const Environment_Folder  = fetchConfigVariables.then(data => data.Environment_Folder);
  export const Default_Trend_Selector  = fetchConfigVariables.then(data => data.Default_Trend_Selector);
  export const Current_Test_Case_Result_Filename  = fetchConfigVariables.then(data => data.Current_Test_Case_Result_Filename);
  export const Current_Coverage_Summary_Filename  = fetchConfigVariables.then(data => data.Current_Coverage_Summary_Filename);
  export const Current_Defect_Summary_Filename  = fetchConfigVariables.then(data => data.Current_Defect_Summary_Filename);
  export const Chart_X_Axis  = fetchConfigVariables.then(data => data.Chart_X_Axis);