import { View,ToastAndroid, StatusBar, useColorScheme } from 'react-native'
import { useState } from 'react'
import { Colors } from "../../../constants/Colors"
import LabelAnodiam from "../../../components/UI/LabelAnodiam"
import TextInputAnodiam  from "../../../components/UI/TextInputAnodiam"
import ButtonAnodiam from "../../../components/UI/ButtonAnodiam"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { screenStyles } from "../../../components/UI/Styles"


export default function ForgotPassword() {
  const colorScheme = useColorScheme();
  const padding = 20
  const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
  const height = '100%'
  const styles = screenStyles(padding, backgroundColor, height)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleKeyPressEmail = (email) => {
    setEmail(email)
  }
  const handleKeyPressPassword = (password) => {
    setPassword(password)
  }
  const handleLogin = () => {
    if(!email&&!password){
      ToastAndroid.show('Please enter Email and password', ToastAndroid.LONG)
      return
    }
    signInWithEmailAndPassword(auth, email, password)
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
  return (
    <View style={styles.anodiamScreen}>
      <StatusBar style={colorScheme} backgroundColor={backgroundColor} />
      <View style={{marginTop: 20}}>
        <LabelAnodiam labelText={'Forgot Password'} fontSize={24} fontFamily='Anodiam-Bold'
            color={colorScheme === 'dark' ? Colors.dark.CONTRAST_DARK : Colors.light.CONTRAST_DARK}/>
      </View>
      <View style={{marginTop: 20}}>
        <TextInputAnodiam labelText={'Email'} textInputType={'email'} onChngTxtIpAnodiam={handleKeyPressEmail}/>
      </View>
      <View style={{marginTop: 15}}>
        <TextInputAnodiam labelText={'New Password'} textInputType={'create-password'} onChngTxtIpAnodiam={handleKeyPressPassword}/>
      </View>
      <View style={{marginTop: 15}}>
        <TextInputAnodiam labelText={'Confirm New Password'} textInputType={'confirm-password'} placeholder = {'Re-enter New Password'} onChngTxtIpAnodiam={handleKeyPressPassword}/>
      </View>
      <View style={{marginTop: 30}}>
        <ButtonAnodiam buttonText={'Reset Password'}/>
      </View>
    </View>
  )
}
