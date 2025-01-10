import { StatusBar, useColorScheme, ScrollView } from "react-native";
import ScreenZero from "./auth/ScreenZero";
import { Colors } from "@/assets/Colors";
import { screenStyles } from "@/components/ui/utils/Styles";

export default function Index() {
  const colorScheme = useColorScheme();
  const padding = 10
  const paddingTop = 10
  const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
  const height = '100%'
  const styles = screenStyles(padding, paddingTop, backgroundColor, height)
  return (
    <ScrollView style={styles.anodiamScreen}>
      <StatusBar backgroundColor={backgroundColor} />
      <ScreenZero/>
    </ScrollView>
  );
}
