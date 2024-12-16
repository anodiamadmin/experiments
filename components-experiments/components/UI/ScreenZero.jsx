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
        setTxtIpOne(txtIpTwo)
        console.log("Content 2: ", {txtIpTwo});
    }
    const handleKeyPressPass = (txtIpPass) => {
        setTxtIpOne(txtIpPass)
        console.log("Content 3: ", {txtIpPass});
    }
    const handleKeyPressConfPass = (txtIpConfPass) => {
        setTxtIpOne(txtIpConfPass)
        console.log("Content 4: ", {txtIpConfPass});
    }
    const handleKeyPressFloat = (txtIpFloat) => {
        setTxtIpOne(txtIpFloat)
        console.log("Content 5: ", {txtIpFloat});
    }
    const handleKeyPressInt = (txtIpInt) => {
        setTxtIpOne(txtIpInt)
        console.log("Content 6: ", {txtIpInt});
    }
    const handleEmail = (txtIpEmail) => {
        setTxtIpOne(txtIpEmail)
        console.log("Content 7: ", {txtIpEmail});
    }
    return (
        <View style={styles.anodiamScreen}>
            <StatusBar style={colorScheme} backgroundColor={backgroundColor} />
            {/* <LabelAnodiam labelText={'My name is Soubhanik'} color={Colors.RED} fontSize={30}/>
            <ButtonAnodiam buttonText={'My Button'} onPrsBtnAnodiam={handleOnPressPrimary}/>
            <ButtonAnodiam buttonText={'hyper-link'} buttonType={'hyperlink'} onPrsBtnAnodiam={handleOnPress}/>
            <ButtonAnodiam buttonType={'secondary'} onPrsBtnAnodiam={handleOnPress}/>
            <TextInputAnodiam labelText={'Name'} onChngTxtIpAnodiam={handleKeyPressOne}/> */}
            {/* <TextInputAnodiam labelText={'Surname'} validationText={'Invalid surnane'} onChngTxtIpAnodiam={handleKeyPressTwo}/> */}
            <TextInputAnodiam labelText={'Password'} textInputType={'password'} onChngTxtIpAnodiam={handleKeyPressPass}/>
            <TextInputAnodiam labelText={'Confirm Password'} textInputType={'confirm-password'} onChngTxtIpAnodiam={handleKeyPressConfPass}/>
            <TextInputAnodiam labelText={'Float Numeric'} textInputType={'numeric'} onChngTxtIpAnodiam={handleKeyPressFloat}/>
            <TextInputAnodiam labelText={'Email'} textInputType={'email'} onChngTxtIpAnodiam={handleEmail}/>
        </View>
    )
}

export default ScreenZero