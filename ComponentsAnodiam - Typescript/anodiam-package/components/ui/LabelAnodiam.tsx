import React from 'react';
import { View, Text, useColorScheme, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { labelStyles } from "./utils/Styles";
import { Colors } from '@/assets/Colors';
import * as validation from './utils/Validation';
import * as constants from './utils/ConstantsAnodiam';

// Define an interface for the component props
interface LabelAnodiamProps {
    labelText?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: TextStyle["fontWeight"];
    fontStyle?: TextStyle["fontStyle"];
    textDecorationLine?: TextStyle["textDecorationLine"];
    padding?: number;
    margin?: number;
    textAlign?: TextStyle["textAlign"];
    justifyContent?: ViewStyle["justifyContent"];
    alignItems?: ViewStyle["alignItems"];
}

const LabelAnodiam: React.FC<LabelAnodiamProps> = (props) => {
    const colorScheme = useColorScheme();
    const fileName = 'LabelAnodiam';
    
    // Assign default values if props are not provided
    const {
        labelText = constants.defaultLabelText,
        color = colorScheme === 'dark' ? Colors.dark.ANODIAM_DARK : Colors.light.ANODIAM_DARK,
        fontFamily = constants.defaultFont,
        fontSize = constants.defaultFontSize,
        fontWeight = constants.defaultFontWeight,
        fontStyle = constants.defaultFontStyle,
        textDecorationLine = constants.defaultTextDecorationLine,
        padding = constants.defaultPadding,
        margin = constants.defaultMargin,
        textAlign = constants.textAlignDefault,
        justifyContent = constants.justifyContentDefault,
        alignItems = constants.alignItemsDefault,
    } = props;

    // Validations
    validation.validateProps(fileName, {
        labelText, color, fontFamily, fontSize, fontWeight, fontStyle, 
        textDecorationLine, padding, margin, textAlign, justifyContent, alignItems
    });
    
    // Styles
    const styles = labelStyles(color, fontFamily, fontSize, fontWeight, fontStyle, textDecorationLine,
        padding, margin, textAlign, justifyContent, alignItems);
    
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{labelText}</Text>
        </View>
    );
};

export default LabelAnodiam;