const configFileName="anodiam-test-case-config.json"

const fetchConfigVariables = fetch(configFileName)
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching ' + configFileName + ': ', error);
    return {
      Environment_Folder: null,
      Default_Trend_Selector: null
    };
  });

  export const Environment_Folder  = fetchConfigVariables.then(data => data.Environment_Folder);
  export const Default_Trend_Selector  = fetchConfigVariables.then(data => data.Default_Trend_Selector);  