import { Colors } from "@/assets/Colors";

// COLOR VALIDATION
//-----------------------------------------------------------------------------------------------
// Utility function to flatten the Colors object into an array of valid color values
const getValidColors = (colorsObject) => {
  const flattenColors = (obj) =>
    Object.values(obj).reduce((acc, value) => {
      if (typeof value === 'string') { acc.push(value); }
      else if (typeof value === 'object') { acc = acc.concat(flattenColors(value)); }
      return acc;
    }, []);
  return flattenColors(colorsObject);
};
// Get the list of valid colors
const VALID_COLORS = getValidColors(Colors);
// Function to validate color props and warn if they're invalid
export const validateColorProp = (propName, propValue, defaultValue, fileName) => {
  if (propValue!==undefined && !VALID_COLORS.includes(propValue)) {
    console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a valid color from '@/assets/Colors'. Defaulting to ${defaultValue}` );
  }
};
//-----------------------------------------------------------------------------------------------

// FONT VALIDATION
//-----------------------------------------------------------------------------------------------
const VALID_FONTS = ['Anodiam-Regular', 'Anodiam-Bold', 'Anodiam-Light'];
export const defaultFont = VALID_FONTS[0];
export const validateFontFamilyProp = (propName, propValue, defaultValue, fileName) => {
  if (propValue!==undefined && !VALID_FONTS.includes(propValue)) {
      console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a valid color from [${VALID_FONTS}]. Defaulting to ${defaultValue}` );
  }
}
const MAX_FONT_SIZE = 32;
const MIN_FONT_SIZE = 8;
export const defaultFontSize = 14;
export const validateFontSizeProp = (propName, propValue, fileName) => {
  if (propValue!==undefined && propValue <= 0) { throw new Error('fontSize should be a positive number.'); }
  if (propValue!==undefined && (propValue < MIN_FONT_SIZE || propValue > MAX_FONT_SIZE)) {
      console.warn(`${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a number between ${MIN_FONT_SIZE} and ${MAX_FONT_SIZE} for best rendering of user interface`);
  }
};
const VALID_FONT_WEIGHTS = ['100', '200', '300', '400', '500', '600', '700', '800', '900', 'normal', 'bold'];
export const defaultFontWeight = 'normal';
export const boldFontWeight = 'bold'
export const validateFontWeightProp = (propName, propValue, defaultValue, fileName) => {
  if (propValue!==undefined && !VALID_FONT_WEIGHTS.includes(propValue)) {
      console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a valid fontWeight from [${VALID_FONT_WEIGHTS}] (wrapped in quotes ''). Defaulting to ${defaultValue}` );
  }
};
const VALID_FONT_STYLES = ['normal', 'italic'];
export const defaultFontStyle = 'normal';
export const validateFontStyleProp = (propName, propValue, defaultValue, fileName) => {
  if (propValue!==undefined && !VALID_FONT_STYLES.includes(propValue)) {
      console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a valid fontStyle from [${VALID_FONT_STYLES}] (wrapped in quotes ''). Defaulting to ${defaultValue}` );
  }
};
const VALID_TEXT_DECORATION_LINES = ['none', 'underline', 'line-through', 'underline line-through'];
export const defaultTextDecorationLine = 'none';
export const validateTextDecorationLineProp = (propName, propValue, defaultValue, fileName) => {
  if (propValue!==undefined && !VALID_TEXT_DECORATION_LINES.includes(propValue)) {
      console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a valid textDecorationLine from [${VALID_TEXT_DECORATION_LINES}] (wrapped in quotes ''). Defaulting to ${defaultValue}` );
  }
};
const MAX_ICON_SIZE = 40;
const MIN_ICON_SIZE = 11;
export const defaultIconSize = 24;
export const validateIconSizeProp = (propName, propValue, defaultValue, fileName) => {
  if (propValue!==undefined && propValue <= 0) { throw new Error('iconSize should be a positive number.'); }
  if (propValue!==undefined && (propValue < MIN_ICON_SIZE || propValue > MAX_ICON_SIZE)) {
      console.warn(`${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a number between ${MIN_ICON_SIZE} and ${MAX_ICON_SIZE} for best rendering of user interface. Defaulting to ${defaultValue}`);
  }
}
//-----------------------------------------------------------------------------------------------

// LAYOUT VALIDATION
//-----------------------------------------------------------------------------------------------
const MAX_PADDING = 30;
const MIN_PADDING = 0;
export const defaultPadding = 0;
export const validatePaddingProp = (propName, propValue, fileName) => {
  if (propValue!==undefined && propValue < MIN_PADDING || propValue > MAX_PADDING) {
      console.warn(`${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a number between ${MIN_PADDING} and ${MAX_PADDING} for best rendering of user interface`);
  }
};
export const defaultMargin = 0;
const MAX_MARGIN = 100;
export const validateMarginProp = (propName, propValue, fileName) => {
  if (propValue!==undefined && propValue > MAX_MARGIN) {
      console.warn(`${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a number < ${MIN_MARGIN} for best rendering of user interface`);
  }
};
export const defaultBorderRadius = 10
const MIN_BORDER_RADIUS = 0
const MAX_BORDER_RADIUS = 50
export const validateBorderRadius = (propName, propValue, fileName) => {
  if (propValue!==undefined && (propValue<MIN_BORDER_RADIUS || propValue>MAX_BORDER_RADIUS)) {
      console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a integer between ${MIN_BORDER_RADIUS} and ${MAX_BORDER_RADIUS} for best UI rendering.` );
  }
};
export const defaultBorderWidth = 1
const MIN_BORDER_WIDTH = 0
const MAX_BORDER_WIDTH = 4
export const validateBorderWidth = (propName, propValue, fileName) => {
  if (propValue!==undefined && (propValue<MIN_BORDER_WIDTH || propValue>MAX_BORDER_WIDTH)) {
      console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a integer between ${MIN_BORDER_WIDTH} and ${MAX_BORDER_WIDTH} for best UI rendering.` );
  }
};
const VALID_TEXT_ALIGN = ['auto', 'left', 'right', 'center', 'justify'];
export const defaultTextAlign = 'auto';
export const validateTextAlignProp = (propName, propValue, defaultValue, fileName) => {
  if (propValue!==undefined && !VALID_TEXT_ALIGN.includes(propValue)) {
      console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a valid textAlign from [${VALID_TEXT_ALIGN}] (wrapped in quotes ''). Defaulting to ${defaultValue}` );
  }
};
const VALID_JUSTIFY_CONTENT = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
export const defaultJustifyContent = 'flex-start';
export const validateJustifyContentProp = (propName, propValue, defaultValue, fileName) => {
  if (propValue!==undefined && !VALID_JUSTIFY_CONTENT.includes(propValue)) {
      console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a valid justifyContent from [${VALID_JUSTIFY_CONTENT}] (wrapped in quotes ''). Defaulting to ${defaultValue}` );
  }
}
const VALID_ALIGN_ITEMS = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'];
export const defaultAlignItems = 'stretch';
export const validateAlignItemsProp = (propName, propValue, defaultValue, fileName) => {
  if (propValue!==undefined && !VALID_ALIGN_ITEMS.includes(propValue)) {
      console.warn( `${fileName}: Invalid value "${propValue}" passed to prop "${propName}". It should be a valid alignItems from [${VALID_ALIGN_ITEMS}] (wrapped in quotes ''). Defaulting to ${defaultValue}` );
  }
}
//-----------------------------------------------------------------------------------------------

// TEXT VALIDATION
//-----------------------------------------------------------------------------------------------
export const validateText = (propName, propValue, maxLength, fileName) => {
  if (!propValue || typeof propValue !== 'string') { throw new Error(`${fileName}: Invalid or missing value passed for ${propName} field.`); }
  if (propValue!==undefined && propValue > maxLength) {
      console.warn(`${fileName}: Invalid (too long) value "${propValue}" passed to prop "${propName}". It should be a string < ${maxLength} for best rendering of user interface.`);
  }
}
//-----------------------------------------------------------------------------------------------
