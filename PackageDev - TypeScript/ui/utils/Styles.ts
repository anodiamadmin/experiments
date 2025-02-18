import { Colors } from '../resources/Colors';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const screenStyles = (
  padding: number,
  paddingTop: number,
  backgroundColor: string,
  height: number
): ReturnType<typeof StyleSheet.create> => {
  return StyleSheet.create({
    anodiamScreen: {
      padding,
      paddingTop,
      backgroundColor,
      height,
    } as ViewStyle,
  });
};

// Define the types for the Label styles
interface LabelStyles {
  textContainer: ViewStyle;
  text: TextStyle;
}

// Define the types for the Button styles
interface ButtonStyles {
  buttonPrimary: ViewStyle;
  buttonSecondary: ViewStyle;
  hyperLink: ViewStyle;
}

export const labelStyles = (
  color: string,
  fontFamily: string,
  fontSize: number,
  fontWeight: string|number,
  fontStyle: string,
  textDecorationLine: string,
  padding: number,
  margin: number,
  textAlign: string,
  justifyContent: string,
  alignItems: string
): LabelStyles => {
  return StyleSheet.create({
    textContainer: {
      justifyContent,
      alignItems,
      padding,
    } as ViewStyle,
    text: {
      color,
      fontSize,
      fontFamily,
      textAlign,
      margin,
      fontWeight,
      fontStyle,
      textDecorationLine,
    } as TextStyle,
  });
};

export const buttonStyles = (
  backgroundColor: string,
  padding: number,
  margin: number,
  borderRadius: number,
  borderColor: string,
  borderWidth: number
): ButtonStyles => {
  return StyleSheet.create({
    buttonPrimary: {
      backgroundColor,
      padding,
      margin,
      borderRadius,
    } as ViewStyle,
    buttonSecondary: {
      backgroundColor,
      padding: padding - 2 * borderWidth,
      margin,
      borderRadius,
      borderColor,
      borderWidth,
    } as ViewStyle,
    hyperLink: {
      margin,
    } as ViewStyle,
  });
};

export const textInputStyles = (
  borderRadius: number,
  borderWidth: number,
  padding: number,
  color: string,
  inputColor: string
): ReturnType<typeof StyleSheet.create> => {
  return StyleSheet.create({
    inputLabelRow: {
      flexDirection: 'row', // Arrange texts in a row
      justifyContent: 'space-between', // Add spacing between the texts
      alignItems: 'flex-start', // Align texts properly if they wrap
      width: '100%',
    } as ViewStyle,
    leftName: {
      width: '44%', // Consume 44% of the width
      alignItems: 'flex-start', // Align text to the left
    } as ViewStyle,
    rightMessage: {
      width: '54%', // Consume 54% of the width
      alignItems: 'flex-end', // Align text to the right-bottom
    } as ViewStyle,
    textInput: {
      width: '100%',
      padding,
      borderWidth,
      borderRadius,
      color: inputColor,
      borderColor: color,
    } as TextStyle,
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    } as ViewStyle,
    iconContainer: {
      marginLeft: -40,
    } as ViewStyle,
  });
};

export const PasswordStrengthMeterStyles = (): ReturnType<
  typeof StyleSheet.create
> => {
  return StyleSheet.create({
    passwordMeterContainer: {
      marginTop: 6,
      width: '100%',
    } as ViewStyle,
    progressBar: {
      height: 6, // Adjust height here
      borderRadius: 3,
      // Using a custom property for unfilledColor; if not supported, consider handling it separately.
      unfilledColor: Colors.TRANSPARENTSCREEN,
      borderWidth: 0,
    } as ViewStyle,
    progressBarStyle: {
      borderRadius: 5,
    } as ViewStyle,
  });
};

export const bottomNavStyles = (
  iconSize: number,
  fontFamily: string,
  fontSize: number,
  fontWeight: string,
  padding: number,
  backgroundColor: string,
  bottomNavHeight: number
): ReturnType<typeof StyleSheet.create> => {
  return StyleSheet.create({
    bigIconBox: {
      width: iconSize * 2.2,
      height: iconSize * 2.2,
      marginTop: iconSize,
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle,
    tabBarLabelStyle: {
      fontFamily,
      fontSize,
      fontWeight,
      padding,
    } as TextStyle,
    tabBarStyle: {
      backgroundColor,
      height: bottomNavHeight,
      padding,
    } as ViewStyle,
  });
};