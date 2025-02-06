import { Colors } from "@/assets/Colors"
import * as constants from './ConstantsAnodiam'

// checks if a set is unique and returns true, else false
function areElementsUniqueAndValid(arr) {
  if (!Array.isArray(arr)) return false; // Ensure input is an array
  const seen = new Set();
  for (const item of arr) {
    const trimedItem = item.trim().toLowerCase()
    if (typeof trimedItem !== 'string' || trimedItem === '' || seen.has(trimedItem)) {
      return false }
    seen.add(trimedItem) }
  return true }

// Utility function to flatten the Colors object into an array of valid color values
const getValidColors = (colorsObject) => {
  const flattenColors = (obj) =>
    Object.values(obj).reduce((acc, value) => {
      if (typeof value === 'string') { acc.push(value)}
      else if (typeof value === 'object') { acc = acc.concat(flattenColors(value))}
      return acc
    }, [])
  return flattenColors(colorsObject)
}
// Get the list of valid colors
const VALID_COLORS = getValidColors(Colors)

export const raiseIssue = (issueType, fileName, key, value, suggestion) => {
  const message = `${issueType} in ${fileName}: '${key}' = '${value}' is invalid. It should be a valid ${suggestion} for best UI rendering!`
  switch(issueType) {
    case 'Warning':
      console.warn(message)
      break
    case 'Error':
      throw new Error(message)
    default:
      break
    }
}

// Function to validate color props and warn if they're invalid
export const validateProps = (fileName, props) => {
  Object.entries(props).forEach(([key, value]) => {
    if(value!==undefined) {
      switch (key) {
        case 'color':
        case 'inputColor':
        case 'activeColor':
        case 'greyColor':
        case 'backgroundColor':
        case 'rippleColor':
        case 'borderColor':
        case 'validationTextColor':
        case 'placeholderTextColor':
          if (!VALID_COLORS.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `color from '@/assets/Colors' file`)}
          break
        case 'padding':
          if (value < constants.MIN_PADDING || value > constants.MAX_PADDING) {
            raiseIssue('Warning', fileName, key, value, `number between ${constants.MIN_PADDING} and ${constants.MAX_PADDING}`)}
          break
        case 'margin':
          if (value > constants.MAX_MARGIN) {
            raiseIssue('Warning', fileName, key, value, `number < ${constants.MAX_MARGIN}`)}
          break
        case 'borderRadius':
          if (value<constants.MIN_BORDER_RADIUS || value>constants.MAX_BORDER_RADIUS) {
            raiseIssue('Warning', fileName, key, value, `number between ${constants.MIN_BORDER_RADIUS} and ${constants.MAX_BORDER_RADIUS}`)}
          break
        case 'borderWidth':
          if (value<constants.MIN_BORDER_WIDTH || value>constants.MAX_BORDER_WIDTH) {
            raiseIssue('Warning', fileName, key, value, `number between ${constants.MIN_BORDER_WIDTH} and ${constants.MAX_BORDER_WIDTH}`)}
          break
        case 'fontFamily':
          if (!constants.VALID_FONTS.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `font from [${constants.VALID_FONTS}]`)}
          break
        case 'fontSize':
        case 'validationFontSize':
          if (value < constants.MIN_VISIBLE_FONT_SIZE) { 
            raiseIssue('Error', fileName, key, value, `positive number between ${constants.MIN_FONT_SIZE} and ${constants.MAX_FONT_SIZE}`)}
          if (value < constants.MIN_FONT_SIZE || value > constants.MAX_FONT_SIZE) {
            raiseIssue('Warning', fileName, key, value, `positive number between ${constants.MIN_FONT_SIZE} and ${constants.MAX_FONT_SIZE}`)}
          break
        case 'fontWeight':
          if (!constants.VALID_FONT_WEIGHTS.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `fontWeight from [${constants.VALID_FONT_WEIGHTS}] (wrapped in quotes '')`)}
          break
        case 'textDecorationLine':
          if (!constants.VALID_TEXT_DECORATION_LINES.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `textDecorationLine from [${constants.VALID_TEXT_DECORATION_LINES}] (wrapped in quotes ''). Defaulting to ${constants.defaultTextDecorationLine}`)}
          break
        case 'textAlign':
          if (!constants.VALID_TEXT_ALIGN.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `textAlign from [${constants.VALID_TEXT_ALIGN}] (wrapped in quotes ''). Defaulting to ${constants.textAlignDefault}`)}
          break
        case 'justifyContent':
          if (!constants.VALID_JUSTIFY_CONTENT.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `justifyContent from [${constants.VALID_JUSTIFY_CONTENT}] (wrapped in quotes ''). Defaulting to ${constants.justifyContentDefault}`)}
          break
        case 'alignItems':
          if (!constants.VALID_ALIGN_ITEMS.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `alignItems from [${constants.VALID_ALIGN_ITEMS}] (wrapped in quotes ''). Defaulting to ${constants.alignItemsDefault}`)}
          break
        case 'iconSize':
          if (value <= 0) {
            raiseIssue('Error', fileName, key, value, `a positive number`)}
          if (value < constants.MIN_ICON_SIZE || value > constants.MAX_ICON_SIZE) {
            raiseIssue('Warning', fileName, key, value, `number between ${constants.MIN_ICON_SIZE} and ${constants.MAX_ICON_SIZE}`)}
          break
        case 'fontStyle':
          if (!constants.VALID_FONT_STYLES.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `fontStyle from [${constants.VALID_FONT_STYLES}] (wrapped in quotes ''). Defaulting to ${constants.defaultFontStyle}`)}
          break
        case 'labelText':
          // if(value.length>constants.MAX_TEXT_LENGTH) {
          //   raiseIssue('Warning', fileName, key, value, `string of length < ${constants.MAX_TEXT_LENGTH} characters`)}
          // break
        case 'validationText':
          if(value.length>constants.MAX_LARGE_TEXT_LENGTH) {
            raiseIssue('Warning', fileName, key, value, `string of length < ${constants.MAX_LARGE_TEXT_LENGTH}`)}
          break
        case 'buttonType':
          if (!constants.VALID_BUTTON_TYPES.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `option from [${constants.VALID_BUTTON_TYPES}]. Defaulting to ${constants.defaultButtonType}`)}
          break
        case 'buttonText':
        case 'textInputLabel':
        case 'placeholder':
          if (value.length>constants.MAX_SHORT_TEXT_LENGTH||value<constants.MICRO_TEXT_LENGTH) {
            raiseIssue('Warning', fileName, key, value + ` of length = ${buttonText.length} chars`, `string of ${constants.MICRO_TEXT_LENGTH} to ${constants.MAX_SHORT_TEXT_LENGTH} characters`)}
          break
        case 'bottomNavHeight':
          if (value<constants.MIN_BOTTOM_NAV_HEIGHT) {
            raiseIssue('Error', fileName, key, value, `number > ${constants.MIN_BOTTOM_NAV_HEIGHT} and < ${constants.MAX_BOTTOM_NAV_HEIGHT}`)}
          if (value>constants.MAX_BOTTOM_NAV_HEIGHT) {
            raiseIssue('Warning', fileName, key, value, `number > ${constants.MIN_BOTTOM_NAV_HEIGHT} and < ${constants.MAX_BOTTOM_NAV_HEIGHT}`)}
          break
        case 'bottomNavTabLabel':
          if (value.length>constants.MAX_VERY_SHORT_TEXT_LENGTH||value<constants.MICRO_TEXT_LENGTH) {
            raiseIssue('Warning', fileName, key, value + `of length = ${bottomNavTabLabel.length} chars`, `string of ${constants.MICRO_TEXT_LENGTH} to ${constants.MAX_VERY_SHORT_TEXT_LENGTH} characters`)}
          break
        case 'passwordStrength':
          if (value<constants.MIN_PASSWORD_STRENGTH || value>constants.MAX_PASSWORD_STRENGTH || !Number.isInteger(value)) {
            raiseIssue('Warning', fileName, key, value, `integer between ${constants.MIN_PASSWORD_STRENGTH} and ${constants.MAX_PASSWORD_STRENGTH}`)}
          break
        case 'textInputType':
          if (!constants.textInputTypes.includes(value)) {
            raiseIssue('Warning', fileName, key, value, `option from ${constants.textInputTypes}. Defaulting to ${constants.defaultTextInputType}`)}
          break
        case 'maxLength':
          if (value<constants.MAX_SHORT_TEXT_LENGTH || value>constants.MAX_LARGE_TEXT_LENGTH || !Number.isInteger(value)) {
            raiseIssue('Warning', fileName, key, value, `integer between ${constants.MAX_SHORT_TEXT_LENGTH} and ${constants.MAX_LARGE_TEXT_LENGTH}`)}
          break
        case 'gapVertical':
          if (value>constants.MAX_MARGIN || value<constants.MIN_GAP_VERTICAL) {
            raiseIssue('Warning', fileName, key, value, `number between ${constants.MIN_GAP_VERTICAL} and ${constants.MAX_MARGIN}`)}
          break
        default:
      }
    }
  })
}

export const validateBottomNavAnodiamTabs = (tabs, bigIconIndex, defaultSelectedIndex, initialRouteName) => {
  const file = 'BottomNavAnodiam'
  if (!Array.isArray(tabs)) {
    raiseIssue('Error', file, 'tabs', tabs, `array of structure ${constants.tabStructure}`)}
  if (tabs.length < constants.MIN_ALLOWED_TABS) {
    raiseIssue('Error', file, 'Number of tabs', tabs.length, `Integer from ${constants.MIN_ALLOWED_TABS} to ${constants.maxTabs}`)}
  if (tabs.length > constants.maxTabs) {
    raiseIssue('Warning', file, 'Number of tabs', tabs.length, `Integer from ${constants.MIN_ALLOWED_TABS} to ${constants.maxTabs}`)}
  if(bigIconIndex<0 || bigIconIndex>(tabs.length-1)) {
    raiseIssue('Error', file, 'bigIconIndex', bigIconIndex, `integer >=0 and < ${tabs.length}`)}
  if(defaultSelectedIndex<0 || defaultSelectedIndex>(tabs.length-1)) {
    raiseIssue('Error', file, 'defaultSelectedIndex', defaultSelectedIndex, `integer >=0 and < ${tabs.length}`)}
  const tabnames = tabs.map(tab => tab.name)
  const tablabels = tabs.map(tab => tab.label)
  const tabicons = tabs.map(tab => tab.icon)
  if(!areElementsUniqueAndValid(tabnames)) {
    raiseIssue('Error', file, `tabs.name`, tabnames, `set of "tab-names" that are each unique and non-null strings`)}
  if(!areElementsUniqueAndValid(tablabels)) {
    raiseIssue('Error', file, `tabs.label`, tablabels, `set of "tab-labels" that are each unique and non-null strings"`)}
  if(!areElementsUniqueAndValid(tabicons)) {
    raiseIssue('Error', file, `tabs.icon`, tabicons, `set of "tab-icons" that are each unique and non-null strings`)}
  tablabels.forEach((bottomNavTabLabel) => {
    validateProps(file, {bottomNavTabLabel})})
}