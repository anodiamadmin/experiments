import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent,ViewStyle,TextStyle } from 'react-native';

// Define type for Button component props
type ButtonProps = {
  onPressButton: (event: GestureResponderEvent) => void;
  title: string;
  styles: {
    button: ViewStyle;
    buttonText: TextStyle;
  };
};

const ButtonAnodiam = ({ onPressButton, title,styles }:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPressButton}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonAnodiam;