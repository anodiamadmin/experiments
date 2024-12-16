import { TouchableOpacity, useColorScheme } from 'react-native'
import { buttonStyles } from "./styles"
import { Colors } from '@/constants/Colors'
import LabelAnodiam from "./LabelAnodiam"

const ButtonAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const buttonType = props.buttonType || 'primary'
    const buttonText = props.buttonText || 'Button-Anodiam'
    const color = props.color ||
                    (buttonType === 'primary' ?
                        (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.WHITE) :
                        Colors.ANODIAM
                    )
    const backgroundColor = props.backgroundColor ||
                    (buttonType === 'primary' ? Colors.ANODIAM :
                        (buttonType === 'secondary' ?
                            (colorScheme === 'dark' ? Colors.dark.ANODIAM_PALE : Colors.light.ANODIAM_LIGHTEST) :
                            (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE)
                        )
                    )
    const padding = props.padding || 12
    const margin = props.margin || 0
    const borderRadius = props.borderRadius || 12
    const borderColor = color
    const borderWidth = props.borderWidth || 1.5
    const fontFamily = props.fontFamily || 'Anodiam-Bold'
    const fontSize = props.fontSize || 18
    const textDecorationLine = props.textDecorationLine || 'underline'
    const textAlign = props.textAlign || 'center'
    const justifyContent = props.justifyContent || 'center'
    const alignItems = props.alignItems || 'center'
    const styles = buttonStyles(backgroundColor, padding, margin, borderRadius, borderColor, borderWidth)
    switch (buttonType) {
        case 'hyperlink':
            return (
                <TouchableOpacity style={styles.hyperLink} onPress={props.onPrsBtnAnodiam}>
                    <LabelAnodiam labelText={buttonText} color={color} fontFamily={fontFamily}
                                    fontSize={fontSize} textDecorationLine={textDecorationLine}
                                    textAlign={textAlign} justifyContent={justifyContent}
                                    alignItems={alignItems}/>
                </TouchableOpacity> )
        case 'secondary':
            return (
                <TouchableOpacity style={styles.buttonSecondary} onPress={props.onPrsBtnAnodiam}>
                    <LabelAnodiam labelText={buttonText} color={color} backgroundColor={'transparent'} 
                                    fontFamily={fontFamily} fontSize={fontSize} textAlign={textAlign}
                                    justifyContent={justifyContent} alignItems={alignItems}/>
                </TouchableOpacity> )
        default:
            return (
                <TouchableOpacity style={styles.buttonPrimary} onPress={props.onPrsBtnAnodiam}>
                    <LabelAnodiam labelText={buttonText} color={color} backgroundColor={'transparent'} 
                                    fontFamily={fontFamily} fontSize={fontSize} textAlign={textAlign}
                                    justifyContent={justifyContent} alignItems={alignItems}/>
                </TouchableOpacity> )
    }
}

export default ButtonAnodiam