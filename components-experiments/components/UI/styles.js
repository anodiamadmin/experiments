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

const labelStyles = (color, backgroundColor, fontFamily, fontSize, padding, margin, 
                        textAlign, justifyContent, alignItems, fontWeight, fontStyle, textDecorationLine) => {
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

const buttonStyles = (marginTop, padding, backgroundColor, borderRadius, borderColor, borderWidth) => {
    return StyleSheet.create({
        button: {
            marginTop: marginTop,
            padding: padding,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            borderColor: borderColor,
            borderWidth: borderWidth
        },
    });
};

export { screenStyles, labelStyles, buttonStyles };