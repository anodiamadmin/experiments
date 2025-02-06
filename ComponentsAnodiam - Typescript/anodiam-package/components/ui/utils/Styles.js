import { Colors } from '@/assets/Colors';
import { StyleSheet } from 'react-native';

const screenStyles = (padding, paddingTop, backgroundColor, height) => {
    return StyleSheet.create({
        anodiamScreen: {
            padding,
            paddingTop,
            backgroundColor,
            height,
        },
    });
};

const labelStyles = (color, fontFamily, fontSize, fontWeight, fontStyle, textDecorationLine,
                        padding, margin, textAlign, justifyContent, alignItems) => {
    return StyleSheet.create({
        textContainer: {
            justifyContent,
            alignItems,
            padding,
        },
        text: {
            color,
            fontSize,
            fontFamily,
            textAlign,
            margin,
            fontWeight,
            fontStyle,
            textDecorationLine,
        },
    });
};

const buttonStyles = (backgroundColor, padding, margin, borderRadius, borderColor, borderWidth) => {
    return StyleSheet.create({
        buttonPrimary: {
            backgroundColor,
            padding,
            margin,
            borderRadius,
        },
        buttonSecondary: {
            backgroundColor,
            padding: padding - 2*borderWidth,
            margin,
            borderRadius,
            borderColor,
            borderWidth,
        },
        hyperLink: {
            margin,
        },
    });
};

const textInputStyles = (borderRadius, borderWidth, padding, color, inputColor) => {
    return StyleSheet.create({
        inputLabelRow: {
            flexDirection: 'row', // Arrange texts in a row
            justifyContent: 'space-between', // Add spacing between the texts
            alignItems: 'flex-start', // Align texts properly if they wrap
            width: '100%',
        },
        leftName: {
            width: '44%', // Consume 45% of the width
            alignItems: 'flex-start' // Align text to the left
        },
        rightMessage: {
            width: '54%', // Consume 45% of the width
            alignItems: 'flex-end', // Align text to the right-bottom
        },
        textInput: {
            width: '100%',
            padding,
            borderWidth,
            borderRadius,
            color: inputColor,
            borderColor: color,
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        iconContainer: {
            marginLeft: -40
        }
    });
};

const PasswordStrengthMeterStyles = () => {
    return StyleSheet.create({
        passwordMeterContainer: {
            marginTop: 6,
            width: '100%',
        },
        progressBar: {
            height: 6, // Adjust height here
            borderRadius: 3,
            unfilledColor: Colors.TRANSPARENTSCREEN, // Light gray for unfilled portion
            borderWidth: 0, // No border
        },
        progressBarStyle: {
            borderRadius: 5,
        },
    });
}

const bottomNavStyles = (iconSize, fontFamily, fontSize, fontWeight, padding, backgroundColor, bottomNavHeight) => {
    return StyleSheet.create({
        bigIconBox: {
            width: iconSize * 2.2,
            height: iconSize * 2.2,
            marginTop: iconSize,
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabBarLabelStyle: {
            fontFamily,
            fontSize,
            fontWeight,
            padding,
        },
        tabBarStyle: {
            backgroundColor,
            height: bottomNavHeight,
            padding,
        },
    });
}

export { screenStyles, labelStyles, buttonStyles, textInputStyles, PasswordStrengthMeterStyles,
    bottomNavStyles
};