import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Anodiam-Bold': require('./../ui/resources/fonts/Oxygen-Bold.ttf'),
    'Anodiam-Light': require('./../ui/resources/fonts/Oxygen-Light.ttf'),
    'Anodiam-Regular': require('./../ui/resources/fonts/Oxygen-Regular.ttf'),
  })
  return fontsLoaded&&(
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
