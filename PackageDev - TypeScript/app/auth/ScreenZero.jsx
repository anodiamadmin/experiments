import { View, ToastAndroid } from 'react-native'
import { useState } from 'react'
import { Colors } from '../../ui/resources/Colors'
import TextInputAnodiam from "../../ui/TextInputAnodiam"
import LabelAnodiam from "../../ui/LabelAnodiam"
import ButtonAnodiam from "../../ui/ButtonAnodiam"
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
    const myEmailBusinessLogic = (emailId) => {
        console.log(`Email Id Entered = ${emailId}`);
        if (emailId!=='sayan@anodiam.com' && emailId!=='dn@anodiam.com') {
            console.log('UNACCEPTABLE EMAILS');
        }
    }
    return (
        <View>
            <View style={{height: 50}}/>
            {/* <LabelAnodiam color={Colors.AMBER} fontFamily={'Invald'} fontSize={18.3} fontWeight={'bold'} fontStyle={'italic'} textDecorationLine={'unDerline'} margin={105}/>
            <LabelAnodiam labelText={'abcdefghijklmnopqrstuvwxyz123456'} color={'#FF8C53'} fontFamily={'Arial'} fontStyle={'Normal'} padding={31}/>
            <LabelAnodiam labelText={'This is my new lebel of 32 plus characters! I am not sure ho many eaxct chars. But I think it is > 32 now'} color={'black'}/> */}
            {/* <LabelAnodiam color={Colors.AMBER} fontSize={18.3} fontWeight={'bold'} fontStyle={'italic'} textDecorationLine={'unDerline'}/> */}
            {/* <LabelAnodiam labelText={'abcdefghijklmz123456'} color={'#FF8C53'} textAlign={'Center'} justifyContent={'flex-end'} alignItems={'flex-end'}/>
            <LabelAnodiam labelText={'This is my new lebel'} textAlign={'right'} justifyContent={'flex-end'} alignItems={'flex-end'}/> */}
            {/* <LabelAnodiam labelText={'My name is Soubhanik'}/>
            <View style={{height: 80}}/>
            <LabelAnodiam labelText={'Hello Anodiam'} color={Colors.RED} fontSize={20}/>
            <ButtonAnodiam buttonText={'My Button'} onPrsBtnAnodiam={handleOnPressPrimary}/>
            <ButtonAnodiam buttonText={'hyperlink'} buttonType={'hyperlink'} onPrsBtnAnodiam={handleOnPress} unusedProp={'unused'} />
            <ButtonAnodiam buttonText={'ko123456789016789012345678ergjre909asfs'} buttonType={'secondary'} onPrsBtnAnodiam={handleOnPress}/>
            <ButtonAnodiam buttonText={'hyper-link'} buttonType={'hyper-link'} onPrsBtnAnodiam={handleOnPress} />
            <ButtonAnodiam buttonText={'Pink Button'} onPrsBtnAnodiam={handleOnPressPrimary} color={'blue'}/>
            <ButtonAnodiam buttonText={'purple-hyperlink'} buttonType={'hyperlink'} onPrsBtnAnodiam={handleOnPress} color={'purple'}/>
            <ButtonAnodiam buttonText={'different BORDER'} buttonType={'secondary'} onPrsBtnAnodiam={handleOnPress} borderColor={'#3388aa'} padding={-3} margin={200}/>
            <ButtonAnodiam buttonText={'same BORDER'} buttonType={'secondary'} onPrsBtnAnodiam={handleOnPress} color={'#3388aa'} padding={100}/>
            <ButtonAnodiam buttonText={'PADDING MARGIN ISSUE'} onPrsBtnAnodiam={handleOnPress} padding={3} margin={101} borderRadius={-5} borderWidth={-2.2} fontFamily={'Serif'}/>
            <ButtonAnodiam buttonText={'PADDING ISSUE'} buttonType={'secondary'} onPrsBtnAnodiam={handleOnPress} padding={100} borderRadius={100}  borderWidth={8.2} fontFamily={'Seriff'}/>
            <ButtonAnodiam buttonText={'MY-LINK'} buttonType={'hyperlink'} textDecorationLine={'underline line-through'}/>
            <ButtonAnodiam buttonText={'Yellow Button'} buttonType={'primary'} color={'yellow'} backgroundColor={'pink'}/> */}
            {/* <TextInputAnodiam />*/}
            <TextInputAnodiam textInputLabel={'myName'} mandatory={true}/>
            <TextInputAnodiam textInputType={'email'} mandatory={true} validateApplicationLogic={myEmailBusinessLogic}/>
            <TextInputAnodiam textInputType={'numeric'}/>
            <TextInputAnodiam textInputType={'password'}/>
            <TextInputAnodiam textInputType={'create-password'} gapVertical={10}/>
            {/* <TextInputAnodiam textInputLabel={'Conf Password'} textInputType={'confirm-password'}/> */}
            <View style={{height: 50}}/>
            <ButtonAnodiam buttonText={'Visit Tabs'} onPrsBtnAnodiam={handleVisitTabs} buttonType={'any type'} />
            <View style={{height: 60}}/>
        </View>
    )
}

export default ScreenZero