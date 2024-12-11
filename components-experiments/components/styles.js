import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const lightStyles = (color, backgroundColor, fontFamily, fontSize, padding, paddingTop, paddingBottom,
                        margin, marginTop, marginBottom, textAlign, justifyContent, alignItems) => {
    const textColor = color != null ? color : Colors.ANODIAM
    const containerBackgroundColor = backgroundColor != null ? backgroundColor : Colors.light.ANODIAM_PALE
    const textFontFamily = fontFamily != null ? fontFamily : 'Anodiam-Regular'
    const textFontSize = fontSize != null ? fontSize : 10
    const containerPaddingTop = paddingTop != null ? paddingTop : 0
    const containerPaddingBottom = paddingBottom != null ? paddingBottom : 0
    const containerPadding = padding != null ? padding : 10
    const textMarginTop = marginTop != null ? marginTop : 0
    const textMarginBottom = marginBottom != null ? marginBottom : 0
    const textMargin = margin != null ? margin : 10
    const textTextAlign = textAlign != null ? textAlign : 'auto'
    const containerJustifyContent = justifyContent != null ? justifyContent : 'flex-start'
    const containerAlignItems = alignItems != null ? alignItems : 'stretch'
    return StyleSheet.create({
        container: {
            backgroundColor: containerBackgroundColor,
            justifyContent: containerJustifyContent,
            alignItems: containerAlignItems,
            padding: containerPadding,
            paddingTop: containerPaddingTop,
            paddingBottom: containerPaddingBottom,
        },
        text: {
            color: textColor,
            fontSize: textFontSize,
            fontFamily: textFontFamily,
            textAlign: textTextAlign,
            margin: textMargin,
            marginTop: textMarginTop,
            marginBottom: textMarginBottom,
        },
    });
};

const darkStyles = (color, backgroundColor, fontFamily, fontSize, padding, paddingTop, paddingBottom,
                        margin, marginTop, marginBottom, textAlign, justifyContent, alignItems) => {
    const textColor = color != null ? color : Colors.ANODIAM
    const containerBackgroundColor = backgroundColor != null ? backgroundColor : Colors.dark.ANODIAM_PALE
    const textFontFamily = fontFamily != null ? fontFamily : 'Anodiam-Regular'
    const textFontSize = fontSize != null ? fontSize : 10
    const containerPaddingTop = paddingTop != null ? paddingTop : 0
    const containerPaddingBottom = paddingBottom != null ? paddingBottom : 0
    const containerPadding = padding != null ? padding : 10
    const textMarginTop = marginTop != null ? marginTop : 0
    const textMarginBottom = marginBottom != null ? marginBottom : 0
    const textMargin = margin != null ? margin : 10
    const textTextAlign = textAlign != null ? textAlign : 'auto'
    const containerJustifyContent = justifyContent != null ? justifyContent : 'flex-start'
    const containerAlignItems = alignItems != null ? alignItems : 'stretch'
    return StyleSheet.create({
        container: {
            backgroundColor: containerBackgroundColor,
            justifyContent: containerJustifyContent,
            alignItems: containerAlignItems,
            padding: containerPadding,
            paddingTop: containerPaddingTop,
            paddingBottom: containerPaddingBottom,
        },
        text: {
            color: textColor,
            fontSize: textFontSize,
            fontFamily: textFontFamily,
            textAlign: textTextAlign,
            margin: textMargin,
            marginTop: textMarginTop,
            marginBottom: textMarginBottom,
        },

    });
};

export { lightStyles, darkStyles };