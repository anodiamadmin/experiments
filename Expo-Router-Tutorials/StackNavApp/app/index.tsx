import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Demo of Stack Navigation</Text>
      <Link href="/about" style={styles.link}><Text>Go to About</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
})
