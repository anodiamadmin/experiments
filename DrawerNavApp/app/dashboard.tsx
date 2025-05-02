import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
})