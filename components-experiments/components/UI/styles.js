import { StyleSheet } from 'react-native';

const screenStyles = (padding, paddingTop, backgroundColor, height) => {
    return StyleSheet.create({
        anodiamScreen: {
            padding: padding,
            paddingTop: paddingTop,
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

const buttonStyles = (backgroundColor, padding, margin, borderRadius, borderColor, borderWidth) => {
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
    });
};

export { screenStyles, labelStyles, buttonStyles };