import { useFonts } from "expo-font";
import { View } from "react-native";
import Index from "./index";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Anodiam-Bold': require('./../assets/fonts/Oxygen-Bold.ttf'),
    'Anodiam-Light': require('./../assets/fonts/Oxygen-Light.ttf'),
    'Anodiam-Regular': require('./../assets/fonts/Oxygen-Regular.ttf'),
  })
  return fontsLoaded&&(
    <View>
      <Index/>
    </View>
  )
}
