import { StatusBar, View, useColorScheme, ToastAndroid } from 'react-native'
import LabelAnodiam from "./LabelAnodiam"
import ButtonAnodiam from "./ButtonAnodiam"
import { Colors } from '@/constants/Colors'
import { screenStyles } from './styles'

const ScreenZero = () => {
    const colorScheme = useColorScheme();
    const padding = 20
    const paddingTop = 50
    const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
    const height = '100%'
    const styles = screenStyles(padding, paddingTop, backgroundColor, height)
    const handleOnPressPrimary = () => {
        ToastAndroid.show('Primary Button Pressed', ToastAndroid.LONG)
        return
      };
    const handleOnPress = () => {
        ToastAndroid.show('Secondary Button or Hyperlink Pressed', ToastAndroid.LONG)
        return
    };
    return (
        <View style={styles.anodiamScreen}>
            <StatusBar style={colorScheme} backgroundColor={backgroundColor} />
            <LabelAnodiam/>
            <ButtonAnodiam buttonText={'My Button'} onPrsBtnAnodiam={handleOnPressPrimary}/>
            <ButtonAnodiam buttonType={'hyperlink'} buttonText={'hyper-link'} onPrsBtnAnodiam={handleOnPress}/>
            <ButtonAnodiam buttonType={'secondary'} onPrsBtnAnodiam={handleOnPress}/>
        </View>
    )
}

export default ScreenZero