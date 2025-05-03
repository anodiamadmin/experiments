import { StyleSheet, Text, View } from "react-native";

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text>Modal Page.</Text>
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
})
