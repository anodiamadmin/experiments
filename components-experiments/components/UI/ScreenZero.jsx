import { StatusBar, View, useColorScheme } from 'react-native'
import LabelAnodiam from "./LabelAnodiam"
import LabelTiffany from "./LabelTiffany"
import { Colors } from '@/constants/Colors'
import { screenStyles } from './styles'

const ScreenZero = () => {
    const colorScheme = useColorScheme();
    const padding = 20
    const paddingTop = 50
    const backgroundColor = colorScheme === 'dark' ? Colors.dark.TIFFANY_PALE : Colors.light.ANODIAM_PALE
    const height = '100%'
    const styles = screenStyles(padding, paddingTop, backgroundColor, height)
    return (
        <View style={styles.anodiamScreen}>
            <StatusBar style={colorScheme} backgroundColor={backgroundColor} />
            <LabelAnodiam/>
            <LabelTiffany/>
        </View>
    )
}

export default ScreenZero