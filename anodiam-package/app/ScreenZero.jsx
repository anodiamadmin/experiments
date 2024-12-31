import { StatusBar, ScrollView, useColorScheme, ToastAndroid, View } from 'react-native'
import { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { screenStyles } from '../components/ui/Styles'
import TextInputAnodiam from "../components/ui/TextInputAnodiam"
import LabelAnodiam from "../components/ui/LabelAnodiam"
import ButtonAnodiam from "../components/ui/ButtonAnodiam"

const ScreenZero = () => {
    const colorScheme = useColorScheme();
    const padding = 10
    const paddingTop = 10
    const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
    const height = '100%'
    const styles = screenStyles(padding, paddingTop, backgroundColor, height)

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [pswd, setPswd] = useState("")
    const [confPswd, setConfPswd] = useState("")
    const [pswdConfirmed, setPswdConfirmed] = useState(false)
    const [createPswd, setCreatePswd] = useState("")
    const [numeric, setNumeric] = useState("")
    const [email, setEmail] = useState("")
    
    const handleOnPressPrimary = () => {
        ToastAndroid.show('Primary Button Pressed', ToastAndroid.LONG)
        return
      };
    const handleOnPress = () => {
        ToastAndroid.show('Secondary Button or Hyperlink Pressed', ToastAndroid.LONG)
        return
    };
    const handleKeyPressName = (name) => {
        setName(name)
        console.log("Name: ", {name});
    }
    const handleKeyPressSurname = (surname) => {
        setSurname(surname)
        console.log("Surname: ", {surname});
    }
    const handleKeyPressPswd = (pswd) => {
        setPswd(pswd)
        pswd.length>=6 && pswd===confPswd ? setPswdConfirmed(true) : setPswdConfirmed(false)
        console.log("Password: ", {pswd});
    }
    const handleKeyPressConfPswd = (confPswd) => {
        setConfPswd(confPswd)
        pswd.length>=6 && pswd===confPswd ? setPswdConfirmed(true) : setPswdConfirmed(false)
        console.log("Confirm Password: ", {confPswd});
    }
    const handleKeyPressCreatePass = (createPswd) => {
        setCreatePswd(createPswd)
        console.log("Create Password: ", {createPswd});
    }
    const handleKeyPressNumeric = (numeric) => {
        setNumeric(numeric)
        console.log("Numeric Input: ", {numeric});
    }
    const handleKeyPressEmail = (email) => {
        setEmail(email)
        console.log("Email: ", {email});
    }
    return (
        <ScrollView style={styles.anodiamScreen}>
            <StatusBar style={colorScheme} backgroundColor={backgroundColor} />
            <LabelAnodiam labelText={'My name is Soubhanik'} color={Colors.RED} fontSize={20}/>
            <ButtonAnodiam buttonText={'My Button'} onPrsBtnAnodiam={handleOnPressPrimary}/>
            <ButtonAnodiam buttonText={'hyper-link'} buttonType={'hyperlink'} onPrsBtnAnodiam={handleOnPress}/>
            <ButtonAnodiam buttonType={'secondary'} onPrsBtnAnodiam={handleOnPress}/>
            <TextInputAnodiam labelText={'Name'} onChngTxtIpAnodiam={handleKeyPressName}/>
            <TextInputAnodiam labelText={'Surname'} validationText={'Invalid surnane'} onChngTxtIpAnodiam={handleKeyPressSurname}/>
            <TextInputAnodiam labelText={'Password'} textInputType={'password'} onChngTxtIpAnodiam={handleKeyPressPswd}/>
            <TextInputAnodiam labelText={'Confirm Password'} textInputType={'confirm-password'} pswdConfirmed={pswdConfirmed} onChngTxtIpAnodiam={handleKeyPressConfPswd}/>
            <TextInputAnodiam labelText={'Create Password'} textInputType={'create-password'} onChngTxtIpAnodiam={handleKeyPressCreatePass}/>
            <TextInputAnodiam labelText={'Number'} textInputType={'numeric'} onChngTxtIpAnodiam={handleKeyPressNumeric}/>
            <TextInputAnodiam labelText={'Email'} textInputType={'email'} onChngTxtIpAnodiam={handleKeyPressEmail}/>
            <View style={{height: 50}}></View>
        </ScrollView>
    )
}

export default ScreenZero