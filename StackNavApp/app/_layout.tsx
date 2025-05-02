import { HeaderBackButton } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function LogoTitle() {
  return (
    <Image style={styles.logo} source={require("../assets/images/react-logo.png")} />
  );
}

export default function RootLayout() {
  return (
  <Stack screenOptions={{ 
    // headerShown: false
    // title: "Home",
    // headerTitle: "Stack Nav",
    headerStyle: { backgroundColor: "#f4511e" },
    headerTintColor: "#fff",
    headerTitleStyle: { fontWeight: "bold" },
    headerTitleAlign: "center",
    headerBackTitle: "Back",
    headerBackButtonMenuEnabled: true,
    headerRight: (props) =>(
      <Pressable onPress={() => alert("Menu Button Pressed!")} style={{padding: 10}}>
        <Text style={{color: 'white', fontSize: 16}}>Menu</Text>
      </Pressable>
    ),
    headerTitle: (props) => <LogoTitle/>,
    // headerLeft: (props) => <Text style={styles.headerLeft}>Home</Text>,
  }} >
    <Stack.Screen name="index" options={{ headerLeft: props => <Text style={styles.headerLeft}>Home</Text> }}/>
    <Stack.Screen name="about" options={{ 
      headerLeft: (props) => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <HeaderBackButton {...props} />
          <Text style={styles.headerLeft}>About</Text>
        </View>
      ),
    }}/>
  </Stack>
)}

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
  },
  headerLeft: {
    fontSize: 16,
    color: "grey",
    padding: 10,
    fontWeight: "bold",
  },
})