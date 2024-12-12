import { View, Text, useColorScheme } from 'react-native'
import { labelStyles } from "./styles"
import { Colors } from '@/constants/Colors'

const LabelAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const labelText = props.labelText || 'Anodiam colored label'
    const color = props.color ||
                            (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARK : Colors.light.ANODIAM_DARK)
    const backgroundColor = props.backgroundColor || 
                            (colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE)
    const fontFamily = props.fontFamily || 'Anodiam-Regular'
    const fontSize = props.fontSize || 14
    const fontWeight = props.fontWeight || 'normal'
    const fontStyle = props.fontStyle || 'normal'
    const textDecorationLine = props.textDecorationLine || 'none'
    const padding = props.padding || 0
    const marginTop = props.marginTop || 0
    const marginRight = props.marginRight || 0
    const marginBottom = props.marginBottom || 0
    const marginLeft = props.marginLeft || 0
    const textAlign = props.textAlign || 'auto'
    const justifyContent = props.justifyContent || 'flex-start'
    const alignItems = props.alignItems || 'stretch'
    const styles = labelStyles(color, backgroundColor, 
                                fontFamily, fontSize, fontWeight, fontStyle, textDecorationLine,
                                padding, marginTop, marginRight, marginBottom, marginLeft, 
                                textAlign, justifyContent, alignItems)
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{labelText}</Text>
        </View>
    )
}

export default LabelAnodiam