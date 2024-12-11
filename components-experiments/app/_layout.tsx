import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Anodiam-Bold': require('./../assets/fonts/Oxygen-Bold.ttf'),
    'Anodiam-Light': require('./../assets/fonts/Oxygen-Light.ttf'),
    'Anodiam-Regular': require('./../assets/fonts/Oxygen-Regular.ttf'),
  })
  return fontsLoaded&&(
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
