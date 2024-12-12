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
            <LabelAnodiam labelText={'AB CD ef #$%^'} color={'#46fd5a'} backgroundColor={'#edf021'}
                            fontFamily={'Anodiam-Bold'} fontSize={40}
                            textAlign={'right'} justifyContent={'flex-end'} alignItems={'stretch'} 
                            fontWeight={'bold'} fontStyle={'italic'} textDecorationLine={'underline'}/>
        </View>
    )
}

export default ScreenZero