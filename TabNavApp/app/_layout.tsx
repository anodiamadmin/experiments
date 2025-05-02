import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'

export default function TabsLayout () {
  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor="brown" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}