import { View, Text, useColorScheme } from 'react-native'
import { darkStyles, lightStyles } from "../styles"

const LabelAnodiam = (props) => {
    const labelText = props.labelText || 'Anodiam'
    const colorScheme = useColorScheme();
    const color = props.color || null
    const backgroundColor = props.backgroundColor || null
    const fontFamily = props.fontFamily || null
    const fontSize = props.fontSize || null                    
    const padding = props.padding || null
    const paddingTop = props.paddingTop || null
    const paddingBottom = props.paddingBottom || null
    const margin = props.margin || null
    const marginTop = props.marginTop || null
    const marginBottom = props.marginBottom || null
    const textAlign = props.textAlign || null
    const justifyContent = props.justifyContent || null
    const alignItems = props.alignItems || null
    const styles = colorScheme === 'dark' ? darkStyles(color, backgroundColor, fontFamily, fontSize,
                                                        padding, paddingTop, paddingBottom,
                                                        margin, marginTop, marginBottom,
                                                        textAlign, justifyContent, alignItems) : 
                                            lightStyles(color, backgroundColor, fontFamily, fontSize,
                                                        padding, paddingTop, paddingBottom,
                                                        margin, marginTop, marginBottom,
                                                        textAlign, justifyContent, alignItems)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{labelText}</Text>
        </View>
    )
}

export default LabelAnodiam