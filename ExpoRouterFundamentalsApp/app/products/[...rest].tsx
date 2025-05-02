import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function CatchAllProductDetails() {
    const { rest } = useLocalSearchParams<{rest: string[]}>()
    return (
    <View style={styles.container}>
      <Text>Catch All Product Details</Text>
      <Text>Details about product at {rest.join('/')}</Text>
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