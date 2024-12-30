import React from 'react';
import { View, Text, useColorScheme, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Colors } from '../constants/Colors';

// Define the interface for the props
interface LabelAnodiamProps {
  labelText?: string;
  color?: string;
  backgroundColor?: string;
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

// LabelAnodiam component
const LabelAnodiam: React.FC<LabelAnodiamProps> = ({
  labelText = 'Label-Anodiam',
  color,
  backgroundColor,
  fontFamily = 'Anodiam-Regular',
  fontSize = 14,
  fontWeight = 'normal',
  fontStyle = 'normal',
  textDecorationLine = 'none',
  padding = 0,
  margin = 0,
  textAlign = 'auto',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
}) => {
  const colorScheme = useColorScheme();

  // Set default colors based on the color scheme
  const resolvedColor =
    color ||
    (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARK : Colors.light.ANODIAM_DARK);
  const resolvedBackgroundColor =
    backgroundColor ||
    (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE);

  // Generate styles dynamically
  const styles = StyleSheet.create({
    textContainer: {
      justifyContent,
      alignItems,
      backgroundColor: resolvedBackgroundColor,
      padding,
      margin,
    } as ViewStyle,
    text: {
      color: resolvedColor,
      fontFamily,
      fontSize,
      fontWeight,
      fontStyle,
      textDecorationLine,
      textAlign,
    } as TextStyle,
  });

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{labelText}</Text>
    </View>
  );
};

export default LabelAnodiam;