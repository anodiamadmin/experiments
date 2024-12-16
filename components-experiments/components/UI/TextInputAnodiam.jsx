import { View, Text, TextInput, useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'
import LabelAnodiam from "./LabelAnodiam"
import TextInputDescAnodiam from "./TextInputDescAnodiam"
import { textInputStyles } from "./styles"

const TextInputAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const textInputType = props.textInputType || 'text'

    const labelText = props.labelText
    const validationText = props.validationText
    const fontFamily = props.fontFamily || 'Anodiam-Regular'
    const fontSize = props.fontSize || 16
    const color = props.color || Colors.ANODIAM
    const placeholder = props.placeholder || 'Enter: ' + (labelText.length > 30 ?
        labelText.substring(0, 30) + "..." : labelText)
    const inputColor = props.inputColor || (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARKER : Colors.light.ANODIAM_DARKER)
    const validationTextColor = props.validationTextColor
    const validationFontSize = props.validationFontSize
    const borderRadius = props.borderRadius || 12
    const borderWidth = props.borderWidth || 1
    const padding = props.padding || 13
    const styles = textInputStyles(borderRadius, borderWidth, padding, color, inputColor)
    let content 
    switch (textInputType) {
        case 'email':
            content = (
                <TextInput placeholder={placeholder} style={styles.textInput} cursorColor={color}
                                placeholderTextColor={Colors.GRAY}
                                onChangeText={props.onChngTxtIpAnodiam}/>
            )
            break;
        case 'password':
            content = (
                <TextInput placeholder={placeholder} style={styles.textInput} cursorColor={color}
                                placeholderTextColor={Colors.GRAY}
                                onChangeText={props.onChngTxtIpAnodiam}/>
            )
            break;
        case 'email':
            content = (
                <TextInput placeholder={placeholder} style={styles.textInput} cursorColor={color}
                                placeholderTextColor={Colors.GRAY}
                                onChangeText={props.onChngTxtIpAnodiam}/>
            )
            break;
        case 'password':
            content = (
                <TextInput placeholder={placeholder} style={styles.textInput} cursorColor={color}
                                placeholderTextColor={Colors.GRAY}
                                onChangeText={props.onChngTxtIpAnodiam}/>
            )
            break;
        case 'email':
            content = (
                <TextInput placeholder={placeholder} style={styles.textInput} cursorColor={color}
                                placeholderTextColor={Colors.GRAY}
                                onChangeText={props.onChngTxtIpAnodiam}/>
            )
            break;
        case 'password':
            content = (
                <TextInput placeholder={placeholder} style={styles.textInput} cursorColor={color}
                                placeholderTextColor={Colors.GRAY}
                                onChangeText={props.onChngTxtIpAnodiam}/>
            )
            break;
        default:
        content = (
            <TextInput placeholder={placeholder} style={styles.textInput} cursorColor={color}
                            placeholderTextColor={Colors.GRAY}
                            onChangeText={props.onChngTxtIpAnodiam}/>
            )
        }
    return (
        <View>
            <TextInputDescAnodiam labelText={labelText} validationText={validationText} fontFamily={fontFamily} fontSize={fontSize} color={color} validationTextColor={validationTextColor} validationFontSize={validationFontSize}/>
            {content}
        </View>
    )

}

export default TextInputAnodiam