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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default PasswordStrengthMeter;
