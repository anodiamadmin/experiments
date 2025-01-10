import React from 'react';
import { View } from 'react-native';
import { Colors } from '@/assets/Colors';
import LabelAnodiam from './LabelAnodiam';
import { textInputStyles } from './utils/Styles';

// Define the interface for the component's props
interface TextInputDescAnodiamProps {
  labelText?: string; // Optional, defaults to 'TextInput-Anodiam'
  validationText?: string; // Optional, defaults to ' '
  fontFamily?: string; // Optional, defaults to 'Anodiam-Regular'
  fontSize?: number; // Optional, defaults to 14
  color?: string; // Optional, defaults to Colors.ANODIAM
  validationTextColor?: string; // Optional, defaults to Colors.RED
  validationFontSize?: number; // Optional, defaults to 14
}

// Default values for properties
const defaultLabelText = 'TextInput-Anodiam';
const defaultValidationText = ' ';
const defaultFontFamily = 'Anodiam-Regular';
const defaultFontSize = 14;
const defaultColor = Colors.ANODIAM;
const defaultValidationTextColor = Colors.RED;
const defaultValidationFontSize = 14;

// Main component: TextInputDescAnodiam
const TextInputDescAnodiam: React.FC<TextInputDescAnodiamProps> = (props) => {
  // Destructure props and assign defaults if not provided
  const {
    labelText = defaultLabelText,
    validationText = defaultValidationText,
    fontFamily = defaultFontFamily,
    fontSize = defaultFontSize,
    color = defaultColor,
    validationTextColor = defaultValidationTextColor,
    validationFontSize = defaultValidationFontSize,
  } = props;

  // Styles for the component
  const styles = textInputStyles();

  return (
    <View>
      <View style={styles.inputLabelRow}>
        <View style={styles.leftName}>
          <LabelAnodiam labelText={labelText} color={color} fontFamily={fontFamily} fontSize={fontSize} />
        </View>
        <View style={styles.rightMessage}>
          <LabelAnodiam
            labelText={validationText}
            color={validationTextColor}
            fontFamily={fontFamily}
            fontSize={validationFontSize}
            textAlign={'right'}
          />
        </View>
      </View>
    </View>
  );
};

export default TextInputDescAnodiam;