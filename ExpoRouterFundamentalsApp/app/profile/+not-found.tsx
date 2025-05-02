import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function CustomProfileNotFound() {
  return (
    <View style={styles.container}>
      <Text>Custom Profile 404</Text>
      <Link href="/">
        <Text style={{ color: 'blue' }}>Go to Home</Text>
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