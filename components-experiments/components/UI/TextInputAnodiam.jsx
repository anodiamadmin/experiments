import { useColorScheme, View, Text, TextInput } from 'react-native'
import { Colors } from '@/constants/Colors'
import LabelAnodiam from "./LabelAnodiam"
import { textInputStyles } from "./styles"

const TextInputAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const textInputType = props.textInputType || 'text'
    const labelTextInput = props.labelTextInput || 'TextInput-Anodiam'
    const labelFontFamily = props.labelFontFamily || 'Anodiam-Regular'
    const labelColor = props.labelColor ||
                            (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARK : Colors.light.ANODIAM_DARK)
    const labelFontSize = props.labelFontSize || 20
    const validationText = props.validationText || '* - Mandatory'
    const validationTextColor = props.validationTextColor || Colors.RED
    const inputPlaceholder = props.inputPlaceholder || 'Enter ' + labelTextInput
    const inputPadding = props.inputPadding || 12
    const inputFontFamily = props.inputFontFamily || 'Anodiam-Regular'
    const inputFontSize = props.inputFontSize || 18
    const borderRadius = props.borderRadius || 12
    const borderColor = props.borderColor || Colors.ANODIAM
    const borderWidth = props.borderWidth || 1
    const styles = textInputStyles(labelFontFamily, labelColor, labelFontSize, validationText,
                                    validationTextColor, inputPlaceholder, inputPadding, inputFontFamily,
                                    inputFontSize, borderRadius, borderColor, borderWidth)
    switch (textInputType) {
        case 'email':
            return (
                <View>
                    <Text>Email</Text>
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
                    <View style={styles.flexRow}>
                        <LabelAnodiam labelText={labelTextInput} style={styles.textInputLabel}/>
                        <LabelAnodiam labelText={validationText} style={styles.textInputValidation}/>
                    </View>
                    <TextInput placeholder={inputPlaceholder} style={styles.textInput}/>
                </View> )
        }
}

export default TextInputAnodiam