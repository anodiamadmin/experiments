import { View,ToastAndroid, StatusBar, useColorScheme } from 'react-native'
import { useState } from 'react'
import { Colors } from "../../../constants/Colors"
import LabelAnodiam from "../../../components/UI/LabelAnodiam"
import TextInputAnodiam  from "../../../components/UI/TextInputAnodiam"
import ButtonAnodiam from "../../../components/UI/ButtonAnodiam"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { screenStyles } from "../../../components/UI/styles"

export default function SignUp() {
  const colorScheme = useColorScheme();
  const padding = 20
  const paddingTop = 20
  const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
  const height = '100%'
  const styles = screenStyles(padding, paddingTop, backgroundColor, height)

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
    createUserWithEmailAndPassword(auth, email, password)
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
      <View style={{marginTop: 10}}>
        <LabelAnodiam labelText={'Sign-up with Gypsee'} fontSize={24} fontFamily='Anodiam-Bold'
            color={colorScheme === 'dark' ? Colors.dark.CONTRAST_DARK : Colors.light.CONTRAST_DARK}/>
      </View>
      <View style={{marginTop: 10}}>
        <LabelAnodiam labelText={'Welcome!'} color={Colors.CONTRAST} fontSize={16}/>
      </View>
      <View style={{marginTop: 5}}>
        <LabelAnodiam labelText={'Your adventure starts here...'} color={Colors.CONTRAST} fontSize={16}/>
      </View>
      <View style={{marginTop: 15}}>
        <TextInputAnodiam labelText={'Email'} textInputType={'email'} onChngTxtIpAnodiam={handleKeyPressEmail}/>
      </View>
      <View style={{marginTop: 15}}>
        <TextInputAnodiam labelText={'Password'} textInputType={'password'} onChngTxtIpAnodiam={handleKeyPressPassword}/>
      </View>
      <View style={{marginTop: 20}}>
        <ButtonAnodiam buttonText={'Sign In'} onPrsBtnAnodiam={handleLogin}/>
      </View>
      <View style={{marginTop: 15}}>
        <ButtonAnodiam buttonText={'Create Account'} buttonType='secondary'/>
      </View>
      <View style={{marginTop: 0}}>
        <ButtonAnodiam buttonText={'Forgot Password'} buttonType='hyperlink'/>
      </View>
    </View>
  )
}
