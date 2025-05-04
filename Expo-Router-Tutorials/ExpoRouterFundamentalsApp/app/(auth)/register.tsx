import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Button title='Login' onPress={()=>{router.push('/login')}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})