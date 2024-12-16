import { StatusBar, View, useColorScheme, ToastAndroid } from 'react-native'
import { useState } from 'react'
import LabelAnodiam from "./LabelAnodiam"
import ButtonAnodiam from "./ButtonAnodiam"
import TextInputAnodiam  from "./TextInputAnodiam"
import { Colors } from '@/constants/Colors'
import { screenStyles } from './styles'

const ScreenZero = () => {
    const colorScheme = useColorScheme();
    const [txtIpOne, setTxtIpOne] = useState("")
    const [txtIpTwo, setTxtIpTwo] = useState("")
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
    const handleKeyPressOne = (txtIpOne) => {
        setTxtIpOne(txtIpOne)
        console.log("Content 1: ", {txtIpOne});
    }
    const handleKeyPressTwo = (txtIpTwo) => {
        setTxtIpTwo(txtIpTwo)
        console.log("Content 2: ", {txtIpTwo});
    }
    return (
        <View style={styles.anodiamScreen}>
            <StatusBar style={colorScheme} backgroundColor={backgroundColor} />
            <LabelAnodiam/>
            <ButtonAnodiam buttonText={'My Button'} onPrsBtnAnodiam={handleOnPressPrimary}/>
            <ButtonAnodiam buttonType={'hyperlink'} buttonText={'hyper-link'} padding={2}
                                onPrsBtnAnodiam={handleOnPress}/>
            <ButtonAnodiam buttonType={'secondary'} onPrsBtnAnodiam={handleOnPress}/>
            <TextInputAnodiam labelText={''} validationText={'* (Mandatory)'} onChngTxtIpAnodiam={handleKeyPressOne}/>
            <TextInputAnodiam labelText={'Name'} onChngTxtIpAnodiam={handleKeyPressTwo}/>
        </View>
    )
}

export default ScreenZero