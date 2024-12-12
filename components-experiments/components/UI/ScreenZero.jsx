import { StatusBar, View, useColorScheme } from 'react-native'
import LabelAnodiam from "./LabelAnodiam"
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
            <LabelAnodiam textLabel='AB CD ef #$%^' color={'#46fd5a'} backgroundColor={'#edf021'}
                            fontFamily={'Arial'} fontSize={40} padding={10} margin={10} textAlign={'right'}
                            justifyContent={'flex-end'} alignItems={'stretch'}/>
        </View>
    )
}

export default ScreenZero