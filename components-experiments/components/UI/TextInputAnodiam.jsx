import { useColorScheme, View, Text } from 'react-native'
import { buttonStyles } from "./styles"
import { Colors } from '@/constants/Colors'
import LabelAnodiam from "./LabelAnodiam"

const TextInputAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const inputType = props.inputType || 'text'
    const inputLabel = props.inputLabel || 'Button-Anodiam'
    const color = props.color ||
                    (buttonType === 'Primary' ?
                        (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.WHITE) :
                        Colors.ANODIAM
                    )
    const backgroundColor = props.backgroundColor ||
                    (buttonType === 'Primary' ? Colors.ANODIAM :
                        (buttonType === 'Secondary' ?
                            (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE) :
                            (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE)
                        )
                    )
    const padding = props.padding || 12
    const margin = props.margin || 0
    const borderRadius = props.borderRadius || 12
    const borderColor = props.borderColor || Colors.ANODIAM
    const borderWidth = props.borderWidth || 1.5
    const fontFamily = props.fontFamily || 'Anodiam-Bold'
    const fontSize = props.fontSize || 18
    const textDecorationLine = props.textDecorationLine || 'underline'
    const textAlign = props.textAlign || 'center'
    const justifyContent = props.justifyContent || 'center'
    const alignItems = props.alignItems || 'center'
    const styles = buttonStyles(backgroundColor, padding, margin, borderRadius, borderColor, borderWidth)
    switch (buttonType) {
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
                    <Text>Default Text Input</Text>
                </View> )
        }
}

export default TextInputAnodiam