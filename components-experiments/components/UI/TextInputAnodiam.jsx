import { View, Text, TextInput, useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'
import LabelAnodiam from "./LabelAnodiam"
import { textInputStyles } from "./styles"

const TextInputAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const textInputType = props.textInputType || 'text'
    const labelText = props.labelText || 'TextInput-Anodiam'
    if (textInputType==='email') {
        labelText = props.labelText || 'Email'
    }
    const placeholder = props.placeholder || 'Enter: ' + (labelText.length > 30 ?
                                                            labelText.substring(0, 30) + "..." : labelText)
    const validationText = props.validationText || ' '
    const fontFamily = props.fontFamily || 'Anodiam-Regular'
    const fontSize = props.inputFontSize || 16
    const color = props.color || Colors.ANODIAM
    const inputColor = props.inputColor || (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARKER : Colors.light.ANODIAM_DARKER)
    const validationTextColor = props.validationTextColor || Colors.RED
    const validationFontSize = props.validationFontSize || 14
    const borderRadius = props.borderRadius || 12
    const borderWidth = props.borderWidth || 1
    const padding = props.padding || 13
    const styles = textInputStyles(borderRadius, borderWidth, padding, color, inputColor)
    switch (textInputType) {
        case 'email':
            return (
                <View>
                    <View style={styles.inputLabelRow}>
                        <View style={styles.leftName}>
                            <LabelAnodiam labelText={labelText} fontSize={fontSize} fontFamily={fontFamily}
                                            color={color}/>
                        </View>
                        <View style={styles.rightMessage}>
                            <LabelAnodiam labelText={validationText} fontSize={validationFontSize}
                                            fontFamily={fontFamily} color={validationTextColor}
                                            textAlign={'right'}/>
                        </View>
                    </View>
                    <TextInput placeholder={placeholder} style={styles.textInput} cursorColor={color}
                                    placeholderTextColor={Colors.GRAY}
                                    onChangeText={props.onChngTxtIpAnodiam}/>
                </View> )
        case 'password':
            return (
                <View>
                    <Text>Password</Text>
                </View> )
        case 'confirm-password':
            return (
                <View>
                    <Text>Confirm Password</Text>
                </View> )
        case 'create-password':
            return (
                <View>
                    <Text>Create Password</Text>
                </View> )
        default:
            return (
                <View>
                    <View style={styles.inputLabelRow}>
                        <View style={styles.leftName}>
                            <LabelAnodiam labelText={labelText} fontSize={fontSize} fontFamily={fontFamily}
                                            color={color}/>
                        </View>
                        <View style={styles.rightMessage}>
                            <LabelAnodiam labelText={validationText} fontSize={validationFontSize}
                                            fontFamily={fontFamily} color={validationTextColor}
                                            textAlign={'right'}/>
                        </View>
                    </View>
                    <TextInput placeholder={placeholder} style={styles.textInput} cursorColor={color}
                                    placeholderTextColor={Colors.GRAY} 
                                    onChangeText={props.onChngTxtIpAnodiam}/>
                </View> )
        }
}

export default TextInputAnodiam