import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

export default function ProfileIndex() {
  const isLoggedIn = true
  if (!isLoggedIn) {
    return(
      <Redirect href="/login" />
    )
  }
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Link href="/profile/avator">
        <Text style={{ color: 'blue' }}>Go to Avator</Text>
      </Link>
      <Link href="/profile/setting">
        <Text style={{ color: 'blue' }}>Go to Setting</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }
})