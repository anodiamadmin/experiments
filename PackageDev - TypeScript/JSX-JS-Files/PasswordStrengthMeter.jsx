import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from './resources/Colors';
import { PasswordStrengthMeterStyles } from '../ui/utils/Styles';
import * as validation from '../ui/utils/Validation'
import * as constants from '../ui/utils/ConstantsAnodiam'

const PasswordStrengthMeter = (props) => {
    const fileName = 'passwordStrengthMeter'
    
    const passwordStrength = props.createPswdStrength || constants.defaultPasswordStrength
    validation.validateProps(fileName, {passwordStrength})

    // Map password strength to progress (0 to 1) and bar color
    const getStrengthAttributes = (strength) => {
        if (strength <= 1) return { progress: 0.2, color: Colors.RED }; // Weak
        if (strength === 2) return { progress: 0.4, color: Colors.DARKREDISHAMBER };
        if (strength === 3) return { progress: 0.6, color: Colors.REDISHAMBER };
        if (strength === 4) return { progress: 0.8, color: Colors.AMBER }; 
        if (strength === 5) return { progress: 1, color: Colors.GREEN }; // Strong
        return { progress: 0, color: Colors.RED }; // Default (no strength)
    };

    const { progress, color } = getStrengthAttributes(passwordStrength);
    // validation.validateColorProp('passwordStrengthColor', color, color, filename);

    // If passwordStrength is empty, render nothing
    if (passwordStrength === constants.defaultPasswordStrength) {
        return null;
    }
    const styles = PasswordStrengthMeterStyles()
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