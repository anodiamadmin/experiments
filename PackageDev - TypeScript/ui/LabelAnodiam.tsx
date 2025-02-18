import React from 'react';
import { View, Text, useColorScheme, TextStyle, ViewStyle,StyleSheet } from 'react-native';
import { labelStyles } from './utils/Styles';
import { Colors } from './resources/Colors';
import * as validation from './utils/Validation';
import * as constants from './utils/ConstantsAnodiam';

interface LabelAnodiamProps {
  labelText?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  fontStyle?: TextStyle['fontStyle'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  padding?: number;
  margin?: number;
  textAlign?: TextStyle['textAlign'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
}

const LabelAnodiam: React.FC<LabelAnodiamProps> = (props) => {
  const colorScheme = useColorScheme();
  const fileName = 'LabelAnodiam';

  // Default values for props
  const labelText = props.labelText ?? constants.defaultLabelText;
  const color =
    props.color ?? (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARK : Colors.light.ANODIAM_DARK);
  const fontFamily = props.fontFamily ?? constants.defaultFont;
  const fontSize = props.fontSize ?? constants.defaultFontSize;
  const fontWeight = props.fontWeight ?? constants.defaultFontWeight;
  const fontStyle = props.fontStyle ?? constants.defaultFontStyle;
  const textDecorationLine = props.textDecorationLine ?? constants.defaultTextDecorationLine;
  const padding = props.padding ?? constants.defaultPadding;
  const margin = props.margin ?? constants.defaultMargin;
  const textAlign = props.textAlign ?? constants.textAlignDefault;
  const justifyContent = props.justifyContent ?? constants.justifyContentDefault;
  const alignItems = props.alignItems ?? constants.alignItemsDefault;

  // Validations
  validation.validateProps(fileName, {
    labelText,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    textDecorationLine,
    padding,
    margin,
    textAlign,
    justifyContent,
    alignItems,
  });

  // Styles
  const styles =labelStyles(
    color,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    textDecorationLine,
    padding,
    margin,
    textAlign,
    justifyContent,
    alignItems
  );

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{labelText}</Text>
    </View>
  );
};

export default LabelAnodiam;