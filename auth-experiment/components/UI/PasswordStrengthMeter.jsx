<<<<<<< Updated upstream
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
                height={10} // Adjust the height of the progress bar
                borderRadius={5}
                color={color}
                unfilledColor="#e0e0e0" // Light gray for unfilled portion
                style={styles.progressBar}
            />
=======
import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

const PasswordStrengthMeter = (props) => {
    const passwordStrength = props.createPswdStrength || '';

    // If passwordStrength is empty, render nothing
    if (passwordStrength === '') {
        return null;
    }

    // Total screen width for percentage calculations
    const screenWidth = Dimensions.get('window').width;

    // Constants for styling
    const barWidth = screenWidth * 0.16; // Each bar is 18% of screen width
    const barHeight = 6;
    const barGap = screenWidth * 0.02; // 2.5% of screen width for spacing

    // Function to render the bars based on strength
    const renderBars = () => {
        const bars = [];

        // Define the bar colors based on their position
        const barColors = [Colors.RED, Colors.RED, Colors.AMBER, Colors.AMBER, Colors.GREEN];

        for (let i = 0; i < passwordStrength; i++) {
            bars.push(
                <View
                    key={i}
                    style={{
                        backgroundColor: barColors[i],
                        width: barWidth,
                        height: barHeight,
                        marginRight: i < passwordStrength - 1 ? barGap : 0,
                    }}
                />
            );
        }
        return bars;
    };

    return (
        <View style={styles.container}>
            {renderBars()}
>>>>>>> Stashed changes
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
<<<<<<< Updated upstream
        marginTop: 8,
        width: '100%',
    },
    progressBar: {
        borderRadius: 5,
=======
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
>>>>>>> Stashed changes
    },
});

export default PasswordStrengthMeter;
