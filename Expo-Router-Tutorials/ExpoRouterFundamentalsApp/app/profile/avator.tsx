import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Avator() {
  return (
    <View style={styles.container}>
      <Text>Avator</Text>
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