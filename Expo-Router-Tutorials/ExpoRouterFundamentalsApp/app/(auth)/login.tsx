import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, color: 'orange'}}>Login</Text>

      <Text style={{fontWeight: 'bold', color: 'grey', textDecorationLine: 'underline'}}>Go to Create Account</Text>
      <Link href={"./register"}>
        <Text style={{ color: 'green' }}>Route to './register' without relativeToDirectory</Text>
      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    }
})