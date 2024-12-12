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
                        padding, marginTop, marginRight, marginBottom, marginLeft, 
                        textAlign, justifyContent, alignItems) => {
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
            marginTop: marginTop,
            marginRight: marginRight,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
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