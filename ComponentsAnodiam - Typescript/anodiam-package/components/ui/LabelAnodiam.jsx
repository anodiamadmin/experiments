import { View, Text, useColorScheme } from 'react-native'
import { labelStyles } from "./utils/Styles"
import { Colors } from '@/assets/Colors'
import * as validation from './utils/Validation';

// BUTTON SPECIFIC VALIDATION
//-----------------------------------------------------------------------------------------------
const defaultLabelText = 'Label-Anodiam'
const maxTextLength = 4096
//-----------------------------------------------------------------------------------------------

const LabelAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const filename = 'LabelAnodiam'
    
    const labelText = props.labelText || defaultLabelText
    validation.validateText('labelText', labelText, maxTextLength, filename)
    const color = props.color || (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARK : Colors.light.ANODIAM_DARK)
    validation.validateColorProp('color', props.color, color, filename);
    const fontFamily = props.fontFamily || 'Anodiam-Regular'
    const fontSize = props.fontSize || 14
    const fontWeight = props.fontWeight || 'normal'
    const fontStyle = props.fontStyle || 'normal'
    const textDecorationLine = props.textDecorationLine || 'none'
    const padding = props.padding || 0
    const margin = props.margin || 0
    const textAlign = props.textAlign || 'auto'
    const justifyContent = props.justifyContent || 'flex-start'
    const alignItems = props.alignItems || 'stretch'
    const styles = labelStyles(color, fontFamily, fontSize, fontWeight, fontStyle, textDecorationLine,
                                padding, margin, textAlign, justifyContent, alignItems)
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{labelText}</Text>
        </View>
    )
}

export default LabelAnodiam