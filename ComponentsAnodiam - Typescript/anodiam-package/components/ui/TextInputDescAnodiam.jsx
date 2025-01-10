import { View } from 'react-native'
import { Colors } from '@/assets/Colors'
import LabelAnodiam from "./LabelAnodiam"
import { textInputStyles } from "./utils/Styles"

const TextInputAnodiam = (props) => {
    const labelText = props.labelText || 'TextInput-Anodiam'
    const validationText = props.validationText || ' '
    const fontFamily = props.fontFamily || 'Anodiam-Regular'
    const fontSize = props.fontSize || 14
    const color = props.color || Colors.ANODIAM
    const validationTextColor = props.validationTextColor || Colors.RED
    const validationFontSize = props.validationFontSize || 14
    const styles = textInputStyles()
    return (
        <View>
            <View style={styles.inputLabelRow}>
                <View style={styles.leftName}>
                    <LabelAnodiam labelText={labelText} color={color} fontFamily={fontFamily} fontSize={fontSize}/>
                </View>
                <View style={styles.rightMessage}>
                    <LabelAnodiam labelText={validationText} color={validationTextColor} fontFamily={fontFamily} fontSize={validationFontSize} textAlign={'right'}/>
                </View>
            </View>
        </View>
    )
}

export default TextInputAnodiam