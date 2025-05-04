import { StyleSheet, Text, View } from "react-native";

export default function AboutIOs() {
  return (
    <View style={styles.container}>
      <Text>iOs About Screen</Text>
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