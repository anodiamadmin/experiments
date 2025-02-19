import React from 'react';
import { View } from 'react-native';
import { Colors } from './resources/Colors';
import LabelAnodiam from "./LabelAnodiam";
import { textInputStyles } from "./utils/Styles";
import * as validation from './utils/Validation';
import * as constants from './utils/ConstantsAnodiam';

interface TextInputAnodiamProps {
  color?: string;
  textInputLabel?: string;
  validationText?: string;
  fontFamily?: string;
  fontSize?: number;
  validationTextColor?: string;
  validationFontSize?: number;
}

const TextInputDescAnodiam = (props:TextInputAnodiamProps) => {
  const fileName = 'TextInputDescAnodiam';

  const color = props.color || Colors.ANODIAM;
  const textInputLabel = props.textInputLabel || constants.defaultTextInputLabel;
  const validationText = props.validationText || constants.defaultValidationText;
  const fontFamily = props.fontFamily || constants.defaultFont;
  const fontSize = props.fontSize || constants.defaultFontSize;
  const validationTextColor = props.validationTextColor || Colors.RED;
  const validationFontSize = props.validationFontSize || constants.defaultFontSize;

  // Validate all generic the props
  validation.validateProps(fileName, { 
    color, 
    textInputLabel, 
    validationText, 
    fontFamily, 
    fontSize, 
    validationTextColor, 
    validationFontSize 
  });

  // Styles
  const styles = textInputStyles(0,0,0,color,textInputLabel);
  
  return (
    <View>
      <View style={styles.inputLabelRow}>
        <View style={styles.leftName}>
          <LabelAnodiam 
            labelText={textInputLabel} 
            color={color} 
            fontFamily={fontFamily} 
            fontSize={fontSize}
          />
        </View>
        <View style={styles.rightMessage}>
          <LabelAnodiam 
            labelText={validationText} 
            color={validationTextColor} 
            fontFamily={fontFamily} 
            fontSize={validationFontSize} 
            textAlign="right"
          />
        </View>
      </View>
    </View>
  );
};

export default TextInputDescAnodiam;