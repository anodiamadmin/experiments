import { StyleSheet, Text, View } from "react-native";

export default function AboutAndroid() {
  return (
    <View style={styles.container}>
      <Text>Android About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
});