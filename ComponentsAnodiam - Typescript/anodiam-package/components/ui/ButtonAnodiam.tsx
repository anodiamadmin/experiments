import React from 'react';
import { TouchableOpacity, useColorScheme, ViewStyle, TextStyle } from 'react-native';
import { buttonStyles } from "./utils/Styles";
import { Colors } from '@/assets/Colors';
import LabelAnodiam from "./LabelAnodiam";
import * as validation from './utils/Validation';
import * as constants from './utils/ConstantsAnodiam';

// Define an interface for the component props
interface ButtonAnodiamProps {
    buttonType?: string;
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
    fontWeight?: TextStyle["fontWeight"];
    textDecorationLine?: TextStyle["textDecorationLine"];
    textAlign?: TextStyle["textAlign"];
    justifyContent?: ViewStyle["justifyContent"];
    alignItems?: ViewStyle["alignItems"];
    onPrsBtnAnodiam?: () => void;
}

const ButtonAnodiam: React.FC<ButtonAnodiamProps> = (props) => {
    const colorScheme = useColorScheme();
    const fileName = 'ButtonAnodiam';
    
    // Assign default values if props are not provided
    const {
        buttonType = constants.defaultButtonType,
        buttonText = constants.defaultButtonText,
        color = buttonType === 'primary' ? (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.WHITE) : Colors.ANODIAM,
        borderColor = color,
        backgroundColor = buttonType === 'primary' ? Colors.ANODIAM : (buttonType === 'secondary' ? (colorScheme === 'dark' ? Colors.dark.ANODIAM_PALE : Colors.light.ANODIAM_LIGHTEST) : (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE)),
        padding = constants.defaultButtonPadding,
        margin = constants.defaultMargin,
        borderRadius = constants.defaultBorderRadius,
        borderWidth = constants.defaultButtonBorderWidth,
        fontFamily = constants.defaultFont,
        fontSize = constants.defaultButtonFontSize,
        fontWeight = constants.boldFontWeight,
        textDecorationLine = constants.hyperlinkTextDecoration,
        textAlign = constants.textAlignDefault,
        justifyContent = constants.justifyContentDefault,
        alignItems = constants.alignItemsDefault,
        onPrsBtnAnodiam
    } = props;

    // Validations
    validation.validateProps(fileName, {
        buttonType, buttonText, color, borderColor, backgroundColor, padding, margin,
        borderRadius, borderWidth, fontFamily, fontSize, fontWeight,
        textDecorationLine, textAlign, justifyContent, alignItems
    });

    // Styles
    const styles = buttonStyles(backgroundColor, padding, margin, borderRadius, borderColor, borderWidth);
    
    switch (buttonType) {
        case 'hyperlink':
            return (
                <TouchableOpacity style={styles.hyperLink} onPress={onPrsBtnAnodiam}>
                    <LabelAnodiam labelText={buttonText} color={color} fontFamily={fontFamily}
                        fontWeight={fontWeight} fontSize={fontSize} textDecorationLine={textDecorationLine}
                        textAlign={textAlign} justifyContent={justifyContent} alignItems={alignItems} />
                </TouchableOpacity>
            );
        case 'secondary':
            return (
                <TouchableOpacity style={styles.buttonSecondary} onPress={onPrsBtnAnodiam}>
                    <LabelAnodiam labelText={buttonText} color={color} backgroundColor={'transparent'}
                        fontWeight={fontWeight} fontFamily={fontFamily} fontSize={fontSize} textAlign={textAlign}
                        justifyContent={justifyContent} alignItems={alignItems} />
                </TouchableOpacity>
            );
        default:
            return (
                <TouchableOpacity style={styles.buttonPrimary} onPress={onPrsBtnAnodiam}>
                    <LabelAnodiam labelText={buttonText} color={color} backgroundColor={'transparent'}
                        fontWeight={fontWeight} fontFamily={fontFamily} fontSize={fontSize} textAlign={textAlign}
                        justifyContent={justifyContent} alignItems={alignItems} />
                </TouchableOpacity>
            );
    }
};

export default ButtonAnodiam;