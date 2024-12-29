import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from '@/constants/Colors';

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
        <View style={styles.container}>
            <Progress.Bar
                progress={progress}
                width={null} // Full-width bar
                height={6} // Adjust the height of the progress bar
                borderRadius={3}
                color={color}
                unfilledColor="#77777744" // Light gray transparent for unfilled portion
                borderWidth={0} // No border
                style={styles.progressBar}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        width: '100%',
    },
    progressBar: {
        borderRadius: 5,
    },
});

export default PasswordStrengthMeter;