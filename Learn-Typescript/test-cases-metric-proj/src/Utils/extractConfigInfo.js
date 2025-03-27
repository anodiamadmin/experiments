const configFileName = "anodiam-test-case-config.json";

async function fetchConfigVariables() {
  try {
    const response = await fetch(configFileName);
    return await response.json();
  } catch (error) {
    console.error('Error fetching ' + configFileName + ': ', error);
    return {
      Environment_Folder: null,
      Default_Trend_Selector: null,
      Trend_Selector_Last_3_Info: null,
      Trend_Selector_Last_6_Info: null,
      Trend_Selector_Last_12_Info: null
    };
  }
}

// Fetch the config data synchronously before exporting
const configData = await fetchConfigVariables();

export const Environment_Folder = configData.Environment_Folder;
export const Default_Trend_Selector = configData.Default_Trend_Selector;
export const Trend_Selector_Last_3_Info = configData.Trend_Selector_Last_3_Info;
export const Trend_Selector_Last_6_Info = configData.Trend_Selector_Last_6_Info;
export const Trend_Selector_Last_12_Info = configData.Trend_Selector_Last_12_Info;