import { View,ToastAndroid, useColorScheme } from 'react-native'
import { useState } from 'react'
import { Colors } from "../constants/Colors"
import LabelAnodiam from "../components/UI/LabelAnodiam"
import TextInputAnodiam  from "../components/UI/TextInputAnodiam"
import ButtonAnodiam from "../components/UI/ButtonAnodiam"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configs/FirebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { backGroundStyles } from "../components/UI/styles"

export default function SignIn() {
  const colorScheme = useColorScheme();
  // const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
  const backgroundColor = Colors.GREEN

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
  const styles = backGroundStyles(backgroundColor)
  return (
    <View style={styles.gypseeBackground}>
      <ButtonAnodiam buttonType='arrowback' fontSize={24} color={Colors.BLACK}/>
      <View style={{marginTop: 30}}>
        <LabelAnodiam labelText={'Sign-in to Gypsee'} color={Colors.dark.ANODIAM_TIFFANY} fontSize={24} fontFamily='Anodiam-Bold'/>
      </View>
      <View style={{marginTop: 10}}>
        <LabelAnodiam labelText={'Welcome!'} color={Colors.dark.CONTRAST_TIFFANY} fontSize={16}/>
      </View>
      <View style={{marginTop: 15}}>
        <LabelAnodiam labelText={'Your adventure starts here...'} color={Colors.dark.CONTRAST_TIFFANY} fontSize={16}/>
      </View>
      <View style={{marginTop: 25}}>
        <TextInputAnodiam labelText={'Email'} textInputType={'email'} onChngTxtIpAnodiam={handleKeyPressEmail}/>
      </View>
      <View style={{marginTop: 25}}>
        <TextInputAnodiam labelText={'Password'} textInputType={'password'} onChngTxtIpAnodiam={handleKeyPressPassword}/>
      </View>
      <View style={{marginTop: 40}}>
        <ButtonAnodiam buttonText={'Sign In'} onPrsBtnAnodiam={handleLogin}/>
      </View>
      <View style={{marginTop: 20}}>
        <ButtonAnodiam buttonText={'Create Account'} buttonType='secondary'/>
      </View>
      <View style={{marginTop: 20}}>
        <ButtonAnodiam buttonText={'Forgot Password'} buttonType='hyperlink'/>
      </View>
    </View>
  )
}
