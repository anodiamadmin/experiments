import {ScrollView } from "react-native";
import ScreenZero from "./ScreenZero";
import React from "react";

export default function Index() {
  // const colorScheme = useColorScheme();
  // const padding = 10
  // const paddingTop = 10
  // const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
  // const height = '100%'
  // const styles = screenStyles(padding, paddingTop, backgroundColor, height)
  return (
    <ScrollView>
      <ScreenZero/>
    </ScrollView>
  );
}
