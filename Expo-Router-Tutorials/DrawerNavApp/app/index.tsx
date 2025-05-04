import { StyleSheet, Text, View } from "react-native";

export default function ModalIndex() {
  return (
    <View style={styles.container}>
      <Text>Index page for Drawer Nav!</Text>
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