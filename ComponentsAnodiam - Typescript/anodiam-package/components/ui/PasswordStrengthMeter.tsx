import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from '@/assets/Colors';
import { PasswordStrengthMeterStyles } from './utils/Styles';

// Define the interface for the component's props
interface PasswordStrengthMeterProps {
  createPswdStrength?: number; // Optional, defaults to 0 if not provided
}

// Default values for properties
const defaultPasswordStrength = 0;

// Type for the return value of getStrengthAttributes
interface StrengthAttributes {
  progress: number;
  color: string;
}

// Method to map password strength to progress and color
const getStrengthAttributes = (strength: number): StrengthAttributes => {
  if (strength <= 1) return { progress: 0.2, color: Colors.RED }; // Weak
  if (strength === 2) return { progress: 0.4, color: Colors.DARKREDISHAMBER };
  if (strength === 3) return { progress: 0.6, color: Colors.REDISHAMBER };
  if (strength === 4) return { progress: 0.8, color: Colors.AMBER };
  if (strength === 5) return { progress: 1, color: Colors.GREEN }; // Strong
  return { progress: 0, color: Colors.RED }; // Default (no strength)
};

// Main PasswordStrengthMeter component
const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = (props) => {
  const passwordStrength = props.createPswdStrength || defaultPasswordStrength;

  // Get the strength attributes based on the password strength
  const { progress, color } = getStrengthAttributes(passwordStrength);

  // If passwordStrength is 0 (no password), render nothing
  if (passwordStrength === 0) {
    return null;
  }

  // Styles for the component
  const styles = PasswordStrengthMeterStyles();

  return (
    <View style={styles.passwordMeterContainer}>
      <Progress.Bar
        progress={progress}
        width={null} // Full-width bar
        height={styles.progressBar.height}
        borderRadius={styles.progressBar.borderRadius}
        color={color}
        unfilledColor={styles.progressBar.unfilledColor}
        style={styles.progressBarStyle}
        borderWidth={styles.progressBar.borderWidth}
      />
    </View>
  );
};

export default PasswordStrengthMeter;