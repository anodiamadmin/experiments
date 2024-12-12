import { View, useColorScheme } from 'react-native'
import { buttonStyles } from "./styles"
import { Colors } from '@/constants/Colors'
import LabelAnodiam from "./LabelAnodiam"

const ButtonAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const buttonText = props.buttonText || 'Anodiam'
    const buttonType = props.buttonType || 'Primary'
    const color = props.color ||
                            (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARK : Colors.light.ANODIAM_DARK)
    const fontFamily = props.fontFamily || 'Anodiam-Regular'
    const fontSize = props.fontSize || 14
    const marginTop = props.marginTop || 20
    const padding = props.padding || 20
    const backgroundColor = props.backgroundColor || 
                            (colorScheme === 'dark' ? Colors.dark.TIFFANY_PALE : Colors.light.ANODIAM_PALE)
    const borderRadius = props.borderRadius || 15
    const borderColor = props.borderColor || Colors.ANODIAM
    const borderWidth = props.borderWidth || 1
    const styles = buttonStyles(marginTop, padding, backgroundColor, borderRadius, borderColor, borderWidth)
    return (
        <View style={styles.button}>
            <LabelAnodiam/>
        </View>
    )
}

export default ButtonAnodiam