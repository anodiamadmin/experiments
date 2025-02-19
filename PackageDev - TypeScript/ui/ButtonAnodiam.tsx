import { TouchableOpacity, useColorScheme, ViewStyle } from 'react-native';
import { buttonStyles } from "./utils/Styles";
import { Colors } from './resources/Colors';
import LabelAnodiam from "./LabelAnodiam";
import * as validation from './utils/Validation';
import * as constants from './utils/ConstantsAnodiam';

// Define button types (ButtonType is used in multiple place,hence it is declared here)
type ButtonType = typeof constants.VALID_BUTTON_TYPES[number];

// Define props interface
interface ButtonAnodiamProps {
    buttonType?: ButtonType;
    buttonText?: string;
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    padding?: number;
    margin?: number;
    borderRadius?: number;
    borderWidth?: number;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: typeof constants.VALID_FONT_WEIGHTS[number];
    textDecorationLine?: typeof constants.VALID_TEXT_DECORATION_LINES[number];
    textAlign?: typeof constants.VALID_TEXT_ALIGNS[number];
    justifyContent?: typeof constants.VALID_JUSTIFY_CONTENTS[number];
    alignItems?: typeof constants.VALID_ALIGN_ITEMS[number];
    onPrsBtnAnodiam?: () => void;
}

const ButtonAnodiam = (props:ButtonAnodiamProps) => {
    const colorScheme = useColorScheme();
    const fileName = 'ButtonAnodiam';

    // Ensure buttonType is valid
    const buttonType: ButtonType = constants.VALID_BUTTON_TYPES.includes(props.buttonType as ButtonType)
        ? (props.buttonType as ButtonType)
        : constants.defaultButtonType;

    // Props with defaults
    const buttonText = props.buttonText ?? constants.defaultButtonText;
    const color = props.color ?? (buttonType === 'primary'
        ? (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.WHITE)
        : Colors.ANODIAM);
    const borderColor = props.borderColor ?? color;
    const backgroundColor = props.backgroundColor ?? (
        buttonType === 'primary'
            ? Colors.ANODIAM
            : buttonType === 'secondary'
                ? (colorScheme === 'dark' ? Colors.dark.ANODIAM_PALE : Colors.light.ANODIAM_LIGHTEST)
                : (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE)
    );
    const padding = props.padding ?? constants.defaultButtonPadding;
    const margin = props.margin ?? constants.defaultMargin;
    const borderRadius = props.borderRadius ?? constants.defaultBorderRadius;
    const borderWidth = props.borderWidth ?? constants.defaultButtonBorderWidth;
    const fontFamily = props.fontFamily ?? constants.defaultFont;
    const fontSize = props.fontSize ?? constants.defaultButtonFontSize;
    const fontWeight = props.fontWeight ?? constants.boldFontWeight;
    const textDecorationLine = props.textDecorationLine ?? constants.hyperlinkTextDecoration;
    const textAlign = props.textAlign ?? constants.textAlignDefault;
    const justifyContent = props.justifyContent ?? constants.justifyContentDefault;
    const alignItems = props.alignItems ?? constants.alignItemsDefault;

    // Validate props
    validation.validateProps(fileName, {
        buttonType, buttonText, color, borderColor, backgroundColor, padding, margin,
        borderRadius, borderWidth, fontFamily, fontSize, fontWeight,
        textDecorationLine, textAlign, justifyContent, alignItems
    });

    // Styles
    const styles = buttonStyles(backgroundColor, padding, margin, borderRadius, borderColor, borderWidth);

    return (
        <TouchableOpacity
            style={
                buttonType === 'hyperlink'
                    ? styles.hyperLink
                    : buttonType === 'secondary'
                        ? styles.buttonSecondary
                        : styles.buttonPrimary
            }
            onPress={props.onPrsBtnAnodiam}
        >
            <LabelAnodiam
                labelText={buttonText}
                color={color}
                //backgroundColor={'transparent'}
                fontWeight={fontWeight}
                fontFamily={fontFamily}
                fontSize={fontSize}
                textAlign={textAlign}
                textDecorationLine={buttonType === 'hyperlink' ? textDecorationLine : undefined}
                justifyContent={justifyContent}
                alignItems={alignItems}
            />
        </TouchableOpacity>
    );
};

export default ButtonAnodiam;