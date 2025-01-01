import React from 'react';
import { TouchableOpacity, Text,StyleSheet  } from 'react-native';

interface ButtonProps {
  buttonLabel: string;
  onAnodiamButtonPress: () => void;
}

const ButtonWithStyles: React.FC<ButtonProps> = ({ buttonLabel, onAnodiamButtonPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onAnodiamButtonPress}>
      <Text style={styles.buttonText}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonWithStyles;