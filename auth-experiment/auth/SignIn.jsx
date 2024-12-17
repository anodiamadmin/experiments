import { View } from 'react-native'
import { useState } from 'react'
import { Colors } from "../constants/Colors"
import LabelAnodiam from "../components/UI/LabelAnodiam"
import TextInputAnodiam  from "../components/UI/TextInputAnodiam"
import ButtonAnodiam from "../components/UI/ButtonAnodiam"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configs/FirebaseConfig'

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")

    const handleKeyPressEmail = (email) => {
        setEmail(email)
        console.log("Email: ", {email});
    }
    const handleKeyPressPswd = (pswd) => {
        setPswd(pswd)
        console.log("Password: ", {pswd});
    }
    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, pswd)
      .then((userCredential) => {
        // Sign in 
        const user = userCredential.user;
        //AsyncStorage.setItem('userdetails',  JSON.stringify(user));
        // console.log("User details after logging : " + JSON.stringify(user));
        //setIsBusy(false)
        //router.replace('/mytrip')
        console.log('SIGN-IN USER:: ', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message, error.code);
        //ToastAndroid.show(errorCode, ToastAndroid.LONG)
        //setIsBusy(false)
      });
      }
  return (
    <View style={{
      padding: 20,
      paddingTop: 60,
      backgroundColor: Colors.light.ANODIAM_PALE,
      height: '100%'
      }}>
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
        <TextInputAnodiam labelText={'Password'} textInputType={'password'} onChngTxtIpAnodiam={handleKeyPressPswd}/>
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
