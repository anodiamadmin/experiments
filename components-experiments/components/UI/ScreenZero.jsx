import { StatusBar, View, useColorScheme } from 'react-native'
import LabelAnodiam from "./LabelAnodiam"
import { Colors } from '@/constants/Colors'
import { screenStyles } from './styles'

const ScreenZero = () => {
    const colorScheme = useColorScheme();
    const padding = 20
    const paddingTop = 50
    const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
    const height = '100%'
    const styles = screenStyles(padding, paddingTop, backgroundColor, height)
    return (
        <View style={styles.anodiamScreen}>
            <StatusBar style={colorScheme} backgroundColor={backgroundColor} />
            <LabelAnodiam labelText={'This is a basic text experiment!'}/>
        </View>
    )
}

export default ScreenZero