import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from '@/constants/Colors';
import { PasswordStrengthMeterStyles } from './styles';

const PasswordStrengthMeter = (props) => {
    const passwordStrength = props.createPswdStrength || 0;

    // Map password strength to progress (0 to 1) and bar color
    const getStrengthAttributes = (strength) => {
        if (strength <= 1) return { progress: 0.2, color: Colors.RED }; // Weak
        if (strength === 2) return { progress: 0.4, color: Colors.RED }; // Fair
        if (strength === 3) return { progress: 0.6, color: Colors.AMBER }; // Moderate
        if (strength === 4) return { progress: 0.8, color: Colors.AMBER }; // Strong
        if (strength === 5) return { progress: 1, color: Colors.GREEN }; // Very Strong
        return { progress: 0, color: Colors.RED }; // Default (no strength)
    };

    const { progress, color } = getStrengthAttributes(passwordStrength);

    // If passwordStrength is empty, render nothing
    if (passwordStrength === 0) {
        return null;
    }

    return (
        <View style={PasswordStrengthMeterStyles.passwordMeterContainer}>
            <Progress.Bar
                progress={progress}
                width={null} // Full-width bar
                height={PasswordStrengthMeterStyles.progressBar.height}
                borderRadius={PasswordStrengthMeterStyles.progressBar.borderRadius}
                color={color}
                unfilledColor={PasswordStrengthMeterStyles.progressBar.unfilledColor}
                style={PasswordStrengthMeterStyles.progressBarStyle}
            />
        </View>
    );
};

export default PasswordStrengthMeter;