import { View,ToastAndroid, StatusBar, useColorScheme } from 'react-native'
import { useState } from 'react'
import { Colors } from "../../../constants/Colors"
import LabelAnodiam from "../../../components/UI/LabelAnodiam"
import TextInputAnodiam  from "../../../components/UI/TextInputAnodiam"
import ButtonAnodiam from "../../../components/UI/ButtonAnodiam"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { screenStyles } from "../../../components/UI/Styles"
import { useRouter } from 'expo-router'

export default function SignUp() {
  const colorScheme = useColorScheme();
  const padding = 20
  const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
  const height = '100%'
  const styles = screenStyles(padding, backgroundColor, height)
  const router = useRouter()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [createPassword, setCreatePassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [pswdConfirmed, setPswdConfirmed] = useState(false)

  const handleKeyPressFullName = (fullName) => {
    setFullName(fullName)
  }
  const handleKeyPressEmail = (email) => {
    setEmail(email)
  }
  const handleKeyPressCreatePassword = (createPassword) => {
    setCreatePassword(createPassword)
    createPassword.length>=6 && createPassword===confirmPassword ? setPswdConfirmed(true) : setPswdConfirmed(false)
  }
  const handleKeyPressConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword)
    createPassword.length>=6 && confirmPassword===createPassword ? setPswdConfirmed(true) : setPswdConfirmed(false)
  }
  const handleCreateAccount = () => {
    if(!fullName){
      ToastAndroid.show('Please enter your Full Name', ToastAndroid.LONG)
      return
    }
    if(!email){
      ToastAndroid.show('Please enter your Email', ToastAndroid.LONG)
      return
    }
    if(!createPassword){
      ToastAndroid.show('Please enter your Password', ToastAndroid.LONG)
      return
    }
    if(!confirmPassword){
      ToastAndroid.show('Please enter your Confirm Password', ToastAndroid.LONG)
      return
    }
    if(createPassword !== confirmPassword){
      ToastAndroid.show('Passwords do not match', ToastAndroid.LONG)
      return
    }
    alert("hi")
    createUserWithEmailAndPassword(auth, email, createPassword)
    .then((userCredential) => {
      // Sign in 
      const user = userCredential.user;
      AsyncStorage.setItem('userdetails',  JSON.stringify(user));
      console.log("User details after logging : " + JSON.stringify(user));
      //setIsBusy(false)
      //router.replace('/mytrip')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message, error.code);
      ToastAndroid.show(errorCode, ToastAndroid.LONG)
      //setIsBusy(false)
    });
  }

  const handleRouteSignIn = () => {
    router.push('/auth/sign-in/Index')
  }
  
  return (
    <View style={styles.anodiamScreen}>
      <StatusBar style={colorScheme} backgroundColor={backgroundColor} />
      <View style={{marginTop: 20}}>
        <LabelAnodiam labelText={'Create New Account'} fontSize={24} fontFamily='Anodiam-Bold'
            color={colorScheme === 'dark' ? Colors.dark.CONTRAST_DARK : Colors.light.CONTRAST_DARK}/>
      </View>
      <View style={{marginTop: 15}}>
        <TextInputAnodiam labelText={'Full Name'} onChngTxtIpAnodiam={handleKeyPressFullName}/>
      </View>
      <View style={{marginTop: 15}}>
        <TextInputAnodiam labelText={'Email'} textInputType={'email'} onChngTxtIpAnodiam={handleKeyPressEmail}/>
      </View>
      <View style={{marginTop: 15}}>
        <TextInputAnodiam labelText={'Password'} textInputType={'create-password'} onChngTxtIpAnodiam={handleKeyPressCreatePassword}/>
      </View>
      <View style={{marginTop: 15}}>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <TextInputAnodiam labelText={'Confirm Password'} textInputType={'confirm-password'} placeholder= {'Re-enter Password'} onChngTxtIpAnodiam={handleKeyPressConfirmPassword}/>
=======
        <TextInputAnodiam labelText={'Confirm Password'} textInputType={'confirm-password'} pswdConfirmed={pswdConfirmed} onChngTxtIpAnodiam={handleKeyPressConfirmPassword}/>
>>>>>>> Stashed changes
=======
        <TextInputAnodiam labelText={'Confirm Password'} textInputType={'confirm-password'} pswdConfirmed={pswdConfirmed} onChngTxtIpAnodiam={handleKeyPressConfirmPassword}/>
>>>>>>> Stashed changes
      </View>
      <View style={{marginTop: 30}}>
        <ButtonAnodiam buttonText={'Create Account'} onPrsBtnAnodiam={handleCreateAccount}/>
      </View>
      <View style={{marginTop: 20}}>
        <ButtonAnodiam buttonText={'Sign In'} buttonType='secondary' onPrsBtnAnodiam= {handleRouteSignIn}/>
      </View>
    </View>
  )
}
