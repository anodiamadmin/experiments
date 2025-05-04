import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: 'Home' }} />
    <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
    <Stack.Screen name="webModal" options={{ 
      title: 'Web Modal', 
      presentation: 'transparentModal',
      animation: 'fade',
      headerShown: false,
     }} />
  </Stack>;
}
