import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: `Home`, headerShown: false}}/>
      <Stack.Screen name="contact" options={{title: `Contact Us`}}/>
      <Stack.Screen name="explore" options={{title: `Explore`}}/>
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
