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

const textInputStyles = (labelFontFamily, labelColor, labelFontSize, validationTextColor, inputPadding,
                            inputFontFamily, inputFontSize, borderRadius, borderColor, borderWidth) => {
    return StyleSheet.create({
        textInputLabel: {
            fontFamily: labelFontFamily,
            color: labelColor,
            fontSize: labelFontSize
        },
        textInputValidation: {
            fontFamily: labelFontFamily,
            color: validationTextColor,
            fontSize: labelFontSize
        },
        textInput: {
            padding: inputPadding,
            fontFamily: inputFontFamily,
            fontSize: inputFontSize,
            // borderRadius: borderRadius,
            borderColor: borderColor,
            borderWidth: borderWidth
        },
        flexRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }
    });
};

export { screenStyles, labelStyles, buttonStyles, textInputStyles };