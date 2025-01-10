import { View, ToastAndroid } from 'react-native'
import { useState } from 'react'
import { Colors } from '@/assets/Colors'
import TextInputAnodiam from "../../components/ui/TextInputAnodiam"
import LabelAnodiam from "../../components/ui/LabelAnodiam"
import ButtonAnodiam from "../../components/ui/ButtonAnodiam"
import { router, useRouter } from 'expo-router'

const ScreenZero = () => {
    const maxLength = 64
    const [name, setName] = useState("")
    const [validationName, setValidationName] = useState("")
    const [surname, setSurname] = useState("")
    const [validationSurname, setValidationSurname] = useState("")
    const [pswd, setPswd] = useState("")
    const [confPswd, setConfPswd] = useState("")
    const [pswdConfirmed, setPswdConfirmed] = useState(null)
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
    }
    const handleKeyPressSurname = (surname) => {
        setSurname(surname)
    }
    const handleKeyPressPswd = (pswd) => {
        setPswd(pswd)
        pswd.length>=6 && confPswd.length>=6 ? pswd===confPswd ? setPswdConfirmed(true) : setPswdConfirmed(false) : setPswdConfirmed(null)
    }
    const handleKeyPressConfPswd = (confPswd) => {
        setConfPswd(confPswd)
        pswd.length>=6 && confPswd.length>=6 ? pswd===confPswd ? setPswdConfirmed(true) : setPswdConfirmed(false) : setPswdConfirmed(null)
    }
    const handleKeyPressCreatePass = (createPswd) => {
        setCreatePswd(createPswd)
    }
    const handleKeyPressNumeric = (numeric) => {
        setNumeric(numeric)
    }
    const handleKeyPressEmail = (email) => {
        setEmail(email)
    }
    const handleOnBlurName = () => {
        if (name.trim().length < 3 || name.trim() === "" || name.length > maxLength) {
            setValidationName("Name must be 3 to " + maxLength + " characters long")
        } else {
            setValidationName("")
        }
    }
    const handleOnBlurSurname = () => {
        if (surname.trim().length < 3 || surname.trim() === "" || surname.length > maxLength) {
            setValidationSurname("Surname must be 3 to " + maxLength + " characters long")
        } else {
            setValidationSurname("")
        }
    }
    const router = useRouter()
    const handleVisitTabs = () => {
        router.push('/(tabs)/MyTrips');
    }
    return (
        <View>
            <LabelAnodiam labelText={'My name is Soubhanik'}/>
            <View style={{height: 80}}/>
            <LabelAnodiam labelText={'Hello Anodiam'} color={Colors.RED} fontSize={20}/>
            <ButtonAnodiam buttonText={'My Button'} onPrsBtnAnodiam={handleOnPressPrimary}/>
            <ButtonAnodiam buttonText={'hyper-link'} buttonType={'hyperlink'} onPrsBtnAnodiam={handleOnPress} />
            <ButtonAnodiam buttonType={'secondary'} onPrsBtnAnodiam={handleOnPress}/>
            <TextInputAnodiam labelText={'Name'} onChngTxtIpAnodiam={handleKeyPressName} onBlurTxtIpAnodiam={handleOnBlurName} validationText={validationName}/>
            <TextInputAnodiam labelText={'Surname'} onChngTxtIpAnodiam={handleKeyPressSurname} onBlurTxtIpAnodiam={handleOnBlurSurname} validationText={validationSurname}/>
            <TextInputAnodiam labelText={'Password'} textInputType={'password'} onChngTxtIpAnodiam={handleKeyPressPswd}/>
            <TextInputAnodiam labelText={'Confirm Password'} textInputType={'confirm-password'} pswdConfirmed={pswdConfirmed} onChngTxtIpAnodiam={handleKeyPressConfPswd}/>
            <TextInputAnodiam labelText={'Create Password'} textInputType={'create-password'} onChngTxtIpAnodiam={handleKeyPressCreatePass}/>
            <TextInputAnodiam labelText={'Number'} textInputType={'numeric'} onChngTxtIpAnodiam={handleKeyPressNumeric}/>
            <TextInputAnodiam labelText={'Email'} textInputType={'email'} onChngTxtIpAnodiam={handleKeyPressEmail}/>
            <View style={{height: 20}}/>
            <ButtonAnodiam buttonText={'Visit Tabs'} onPrsBtnAnodiam={handleVisitTabs}/>
            <View style={{height: 60}}/>
        </View>
    )
}

export default ScreenZero