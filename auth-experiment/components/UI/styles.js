import { StyleSheet } from 'react-native';

const imageStyles = (justifyContent, alignItems, width, height) => {
    return StyleSheet.create({
        gifContainer: {
            justifyContent: justifyContent,
            alignItems: alignItems,
        },
        gif: {
            width: width,
            height: height,
        },
        bottomLogoPng: {
            width: 150,
            height: 40,
        }
    });
};

const screenStyles = (padding, backgroundColor, height) => {
    return StyleSheet.create({
        anodiamScreen: {
            padding: padding,
            backgroundColor: backgroundColor,
            height: height
        },
    });
};

const labelStyles = (color, backgroundColor, 
                        fontFamily, fontSize, fontWeight, fontStyle, textDecorationLine,
                        padding, margin, textAlign, justifyContent, alignItems) => {
    return StyleSheet.create({
        textContainer: {
            backgroundColor: backgroundColor,
            justifyContent: justifyContent,
            alignItems: alignItems,
            padding: padding,
        },
        text: {
            color: color,
            fontSize: fontSize,
            fontFamily: fontFamily,
            textAlign: textAlign,
            margin: margin,
            fontWeight: fontWeight,
            fontStyle: fontStyle,
            textDecorationLine: textDecorationLine
        },
    });
};

const buttonStyles = (backgroundColor, padding, margin, borderRadius, borderColor, borderWidth,fontSize) => {
    return StyleSheet.create({
        buttonPrimary: {
            backgroundColor: backgroundColor,
            padding: padding,
            margin: margin,
            borderRadius: borderRadius,
        },
        buttonSecondary: {
            backgroundColor: backgroundColor,
            padding: padding,
            margin: margin,
            borderRadius: borderRadius,
            borderColor: borderColor,
            borderWidth: borderWidth
        },
        hyperLink: {
            padding: padding,
            margin: margin,
        },
        arrowback:{
            fontSize:fontSize,
        }
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
            padding: padding,
            borderWidth: borderWidth,
            borderRadius: borderRadius,
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

export { imageStyles, screenStyles, labelStyles, buttonStyles, textInputStyles };