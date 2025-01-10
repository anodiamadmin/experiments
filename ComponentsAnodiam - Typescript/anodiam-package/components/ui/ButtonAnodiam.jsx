import { TouchableOpacity, useColorScheme } from 'react-native'
import { buttonStyles } from "./utils/Styles"
import { Colors } from '@/assets/Colors'
import LabelAnodiam from "./LabelAnodiam"
import * as validation from './utils/Validation';

// BUTTON SPECIFIC VALIDATION
//-----------------------------------------------------------------------------------------------
const VALID_BUTTON_TYPES = ['primary', 'secondary', 'hyperlink'];
const defaultButtonType = VALID_BUTTON_TYPES[0];
const validateButtonType = (propName, propValue, defaultValue) => {
  if (propValue!==undefined && !VALID_BUTTON_TYPES.includes(propValue)) {
      console.warn( `${filename}: Invalid value "${propValue}" passed to prop "${propName}". It should be a valid color from [${VALID_BUTTON_TYPES}]. Defaulting to ${defaultValue}` );
  }
}
const defaultButtonText = 'Button-Anodiam'
const buttonNameMaxLength = 16
const defaultButtonPadding = 10
const defaultButtonBorderWidth = 1.5
const defaultButtonFontSize=16;
const hyperlinkTextDecoration = 'underline'
const buttonTextAlignDefault = 'center'
const buttonAlignItemsDefault = 'center'
const buttonJustifyCntentDefault = 'center'
//-----------------------------------------------------------------------------------------------

const ButtonAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const filename = 'ButtonAnodiam'

    const buttonType = props.buttonType || defaultButtonType
    validateButtonType('ButtonType', buttonType, defaultButtonType, filename)
    const buttonText = props.buttonText || defaultButtonText
    validation.validateText('buttonText', buttonText, buttonNameMaxLength, filename)

    const color = props.color || (buttonType === 'primary' ? (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.WHITE) : Colors.ANODIAM )
    const borderColor = color
    validation.validateColorProp('color', props.color, color, filename);
    const backgroundColor = props.backgroundColor || (buttonType === 'primary' ? Colors.ANODIAM : (buttonType === 'secondary' ? (colorScheme === 'dark' ? Colors.dark.ANODIAM_PALE : Colors.light.ANODIAM_LIGHTEST) : (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE)))
    validation.validateColorProp('backgroundColor', props.backgroundColor, backgroundColor, filename);

    const padding = props.padding || defaultButtonPadding
    validation.validatePaddingProp('padding', props.padding, filename);
    const margin = props.margin || validation.defaultMargin
    validation.validateMarginProp('margin', props.margin, filename)
    const borderRadius = props.borderRadius || validation.defaultBorderRadius
    validation.validateBorderRadius('borderRadius', props.borderRadius, filename)
    const borderWidth = props.borderWidth || defaultButtonBorderWidth
    validation.validateBorderWidth('borderWidth', props.borderWidth, filename)
    const fontFamily = props.fontFamily || validation.defaultFont;
    validation.validateFontFamilyProp('fontFamily', props.fontFamily, validation.defaultFont, filename);
    const fontSize = props.fontSize || defaultButtonFontSize;
    validation.validateFontSizeProp('fontSize', props.fontSize, filename);
    const fontWeight = props.fontWeight || validation.boldFontWeight;
    validation.validateFontWeightProp('fontWeight', props.fontWeight, validation.boldFontWeight, filename);
    const textDecorationLine = props.textDecorationLine || hyperlinkTextDecoration
    validation.validateTextDecorationLineProp('textDecorationLine', props.textDecorationLine, hyperlinkTextDecoration, filename)
    const textAlign = props.textAlign || buttonTextAlignDefault
    validation.validateTextAlignProp('textAlign', props.textAlign, buttonTextAlignDefault, filename)
    const justifyContent = props.justifyContent || buttonJustifyCntentDefault
    validation.validateJustifyContentProp('justifyContent', props.justifyContent, buttonJustifyCntentDefault, filename)
    const alignItems = props.alignItems || buttonAlignItemsDefault
    validation.validateAlignItemsProp('alignItems', props.alignItems, buttonAlignItemsDefault, filename)
    const styles = buttonStyles(backgroundColor, padding, margin, borderRadius, borderColor, borderWidth)
    switch (buttonType) {
        case 'hyperlink':
            return (
                <TouchableOpacity style={styles.hyperLink} onPress={props.onPrsBtnAnodiam}>
                    <LabelAnodiam labelText={buttonText} color={color} fontFamily={fontFamily}
                                    fontWeight={fontWeight} fontSize={fontSize} textDecorationLine={textDecorationLine}
                                    textAlign={textAlign} justifyContent={justifyContent}
                                    alignItems={alignItems}/>
                </TouchableOpacity> )
        case 'secondary':
            return (
                <TouchableOpacity style={styles.buttonSecondary} onPress={props.onPrsBtnAnodiam}>
                    <LabelAnodiam labelText={buttonText} color={color} backgroundColor={'transparent'} 
                                    fontWeight={fontWeight} fontFamily={fontFamily} fontSize={fontSize} textAlign={textAlign}
                                    justifyContent={justifyContent} alignItems={alignItems}/>
                </TouchableOpacity> )
        default:
            return (
                <TouchableOpacity style={styles.buttonPrimary} onPress={props.onPrsBtnAnodiam}>
                    <LabelAnodiam labelText={buttonText} color={color} backgroundColor={'transparent'} 
                                    fontWeight={fontWeight} fontFamily={fontFamily} fontSize={fontSize} textAlign={textAlign}
                                    justifyContent={justifyContent} alignItems={alignItems}/>
                </TouchableOpacity> )
    }
}

export default ButtonAnodiam