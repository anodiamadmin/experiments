import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn() {
  const navigation = useNavigation();
  const router=useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isBusy, setIsBusy] = useState(false)
  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  const onSignIn = () => {
    if(!email&&!password){
      ToastAndroid.show('Please enter Email and password', ToastAndroid.LONG)
      return
    }
    setIsBusy(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Sign in 
      const user = userCredential.user;
      AsyncStorage.setItem('userdetails',  JSON.stringify(user));
      // console.log("User details after logging : " + JSON.stringify(user));
      setIsBusy(false)
      router.replace('/mytrip')
      // console.log('SIGN-IN USER:: ', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message, error.code);
      ToastAndroid.show(errorCode, ToastAndroid.LONG)
      setIsBusy(false)
    });
  }
  return (
    <View style={{
      padding: 20,
      paddingTop: 60,
      backgroundColor: Colors.PALE_BG,
      height: '100%'
      }}>
      <TouchableOpacity>
        <Ionicons name='arrow-back' onPress={()=>router.back()} size={24} color={Colors.PRIMARY}/>
      </TouchableOpacity>
      <Text style={{
        marginTop: 30,
        fontFamily: 'Anodiam-Bold',
        color: Colors.DARKEST_TIFFANY,
        fontSize: 24,
      }}>
        Sign-in to Gypsee
      </Text>
      <Text
        style={{
          fontSize:16,
          fontFamily:'Anodiam-Regular',
          color: Colors.DARK_TIFFANY,
          marginTop: 10,
      }}>
        Welcome!
      </Text>
      <Text
        style={{
          fontSize:16,
          fontFamily:'Anodiam-Regular',
          color: Colors.DARK_TIFFANY,
          marginTop: 15,
      }}>
         Your adventure starts here...
      </Text>
      {/* Email */}
      <View style={{
        marginTop: 25,
      }}>
        <Text style={{
          fontFamily: 'Anodiam-Regular',
          color: Colors.ANODIAM,
        }}>Email</Text>
        <TextInput placeholder='Enter Email' style={styles.input}
          onChangeText={(value)=>setEmail(value)}
        />
      </View>
      {/* Password */}
      <View style={{
        marginTop: 25,
      }}>
        <Text style={{
          fontFamily: 'Anodiam-Regular',
          color: Colors.ANODIAM,
        }}>Password</Text>
        <TextInput secureTextEntry={true} placeholder='Enter Password' style={styles.input} 
          onChangeText={(value)=>setPassword(value)}
        />
      </View>
      {/* Signin Button */}
      <TouchableOpacity style={{
        marginTop: 40,
        padding: 20,
        backgroundColor: Colors.ANODIAM,
        borderRadius: 15
      }} 
        onPress={onSignIn}
      >
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center'
        }}>Sign In</Text>
      </TouchableOpacity>
      {
        isBusy?
        <ActivityIndicator size="large" style={{ color: Colors.TIFFANY, marginTop: -45 }}/>:
        null
      }
      {/* Create Account Button */}
      <TouchableOpacity style={{
        marginTop: 20,
        padding: 20,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        borderColor: Colors.ANODIAM,
        borderWidth: 1
      }} onPress={()=>router.replace('auth/sign-up')}>
        <Text style={{
          color: Colors.ANODIAM,
          textAlign: 'center'
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.ANODIAM,
    fontFamily: 'Anodiam-Regular'
  }
})