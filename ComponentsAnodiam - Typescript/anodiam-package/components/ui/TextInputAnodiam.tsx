import React, { useState } from 'react';
import { View, TextInput, useColorScheme, TouchableOpacity, Text, TextInputProps } from 'react-native';
import { Colors } from '@/assets/Colors';
import TextInputDescAnodiam from './TextInputDescAnodiam';
import { textInputStyles } from './utils/Styles';
import { Ionicons } from '@expo/vector-icons';
import PasswordStrengthMeter from './PasswordStrengthMeter';

// Define the interface for the component's props
interface TextInputAnodiamProps {
  textInputType?: 'text' | 'password' | 'confirm-password' | 'create-password' | 'email' | 'numeric'; // Optional, defaults to 'text'
  labelText: string; // Required
  fontFamily?: string; // Optional, defaults to 'Anodiam-Regular'
  fontSize?: number; // Optional, defaults to 14
  validationText?: string; // Optional, defaults based on password match
  color?: string; // Optional, defaults to Colors.ANODIAM
  validationTextColor?: string; // Optional
  validationFontSize?: number; // Optional
  placeholder?: string; // Optional
  inputColor?: string; // Optional
  borderRadius?: number; // Optional, defaults to 10
  borderWidth?: number; // Optional, defaults to 1
  padding?: number; // Optional, defaults to 10
  maxLength?: number; // Optional, defaults to 64
  pswdConfirmed?: boolean | null; // Optional
  onChngTxtIpAnodiam: (text: string) => void; // Required function
  onBlurTxtIpAnodiam?: () => void; // Optional
}

// Default values for properties
const defaultFontFamily = 'Anodiam-Regular';
const defaultFontSize = 14;
const defaultColor = Colors.ANODIAM;
const defaultMaxLength = 64;
const defaultBorderRadius = 10;
const defaultBorderWidth = 1;
const defaultPadding = 10;

const TextInputAnodiam: React.FC<TextInputAnodiamProps> = (props) => {
  const colorScheme = useColorScheme();
  const textInputType = props.textInputType || 'text';
  const labelText = props.labelText;
  const fontFamily = props.fontFamily || defaultFontFamily;
  const fontSize = props.fontSize || defaultFontSize;
  const [validationText, setValidationText] = useState<string | JSX.Element>(
    props.validationText ||
      (textInputType === 'confirm-password'
        ? props.pswdConfirmed === null
          ? ''
          : props.pswdConfirmed === true
          ? <Ionicons name='checkmark' color={Colors.GREEN} size={fontSize * 1.5} marginLeft={-40} />
          : (
              //Commented off as it was giving error
              // <View style={{ flexDirection: 'row', alignItems: 'right', justifyContent: 'right' }}>
              <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}}>  
                <Ionicons name='close' color={Colors.RED} size={fontSize * 1.5} />
                <Text style={{ color: Colors.RED, fontSize, fontFamily }}>Passwords don't match.</Text>
              </View>
            )
        : ''
      )
  );
  const color = props.color || defaultColor;
  const placeholder = props.placeholder || (textInputType === 'confirm-password' || textInputType === 'create-password')
    ? labelText.length > 30 ? labelText.substring(0, 30) + '...' : labelText
    : 'Enter: ' + (labelText.length > 30 ? labelText.substring(0, 30) + '...' : labelText);

  const inputColor = props.inputColor || (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARKER : Colors.light.ANODIAM_DARKER);
  const validationTextColor = props.validationTextColor;
  const validationFontSize = props.validationFontSize;

  const borderRadius = props.borderRadius || defaultBorderRadius;
  const borderWidth = props.borderWidth || defaultBorderWidth;
  const padding = props.padding || defaultPadding;
  const maxLength = props.maxLength || defaultMaxLength;

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  const styles = textInputStyles(borderRadius, borderWidth, padding, color, inputColor);

  const passwordVisibility = (
    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
      <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={fontSize * 1.5} color={inputColor} />
    </TouchableOpacity>
  );

  const [createPswdStrength, setCreatePswdStrength] = useState<string | number>("");

  const calculatePasswordStrength = (createPswd: string): string | number => {
    if (!createPswd || createPswd.trim() === "") {
      return "";
    }
    let criteriaMet = 0;
    if (/[a-z]/.test(createPswd)) { criteriaMet += 1 }
    if (/[A-Z]/.test(createPswd)) { criteriaMet += 1 }
    if (/[0-9]/.test(createPswd)) { criteriaMet += 1 }
    if (/[!@#$%^&*()_+={}|:;"'<>,.?/\\₹£¥€₩฿₿₫₺؋֏៛₾₦₱₲₭₮]/.test(createPswd)) { criteriaMet += 1 }
    if (createPswd.length >= 6) { criteriaMet += 1 }
    return criteriaMet;
  };

  const createPswdTextChange = (createPswd: string) => {
    setCreatePswdStrength(calculatePasswordStrength(createPswd));
    props.onChngTxtIpAnodiam(createPswd);
  };

  const createPswdOnBlur = () => {
    if (Number(createPswdStrength) < 5) {
      setValidationText("At least 6 characters\nlowercase, uppercase\nnumeric & special chars.");
    } else {
      setValidationText("");
    }
  };

  let content;
  switch (textInputType) {
    case 'password':
    case 'confirm-password':
    case 'create-password':
      content = (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={!isPasswordVisible}
            cursorColor={color}
            placeholder={placeholder}
            placeholderTextColor={Colors.GREY}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={maxLength}
            onBlur={createPswdOnBlur}
            onChangeText={createPswdTextChange}
          />
          {passwordVisibility}
        </View>
      );
      break;
    case 'email':
      content = (
        <TextInput
          style={styles.textInput}
          cursorColor={color}
          placeholder={placeholder}
          placeholderTextColor={Colors.GREY}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          autoComplete="email"
          maxLength={maxLength}
          onBlur={props.onBlurTxtIpAnodiam}
          onChangeText={props.onChngTxtIpAnodiam}
        />
      );
      break;
    case 'numeric':
      content = (
        <TextInput
          style={[styles.textInput, { textAlign: 'right' }]}
          keyboardType="numeric"
          inputMode="numeric"
          cursorColor={color}
          placeholder={placeholder}
          placeholderTextColor={Colors.GREY}
          maxLength={maxLength}
          onBlur={props.onBlurTxtIpAnodiam}
          onChangeText={props.onChngTxtIpAnodiam}
        />
      );
      break;
    default:
      content = (
        <TextInput
          style={styles.textInput}
          cursorColor={color}
          placeholder={placeholder}
          placeholderTextColor={Colors.GREY}
          maxLength={maxLength}
          onBlur={props.onBlurTxtIpAnodiam}
          onChangeText={props.onChngTxtIpAnodiam}
        />
      );
  }

  return (
    <View>
      <TextInputDescAnodiam
        labelText={labelText}
        validationText={typeof validationText === 'string' ? validationText : ''}
        fontFamily={fontFamily}
        fontSize={fontSize}
        color={color}
        validationTextColor={validationTextColor}
        validationFontSize={validationFontSize}
      />
      {content}
      {textInputType === 'create-password' && createPswdStrength ? (
        <PasswordStrengthMeter createPswdStrength={Number(createPswdStrength)} />
      ) : null}
    </View>
  );
};

export default TextInputAnodiam;