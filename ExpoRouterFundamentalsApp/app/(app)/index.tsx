import { Link, router } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello Anodiam</Text>
      <Link href="/profile">
        <Text style={{ color: "purple" }}>Go to Profile</Text>
      </Link>
      <Link href="/profile/avator">
        <Text style={{ color: "purple" }}>Go to Profile Avator</Text>
      </Link>
      <Link href="/profile/setting">
        <Text style={{ color: "purple" }}>Go to Profile Setting</Text>
      </Link>
      <Link href="/about">
        <Text style={{ color: "brown" }}>Go to About</Text>
      </Link>
      <Link href="/products">
        <Text style={{ color: "orange" }}>Go to Products</Text>
      </Link>
      <Link href="/unmatched">
        <Text style={{ color: "red" }}>Go to 404</Text>
      </Link>
      <Link href="/products/best-sellers/playstation" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Play-Station</Text>
        </Pressable>
      </Link>
      <Button title='Login' onPress={()=>{router.replace('/login')}}/>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  button: {
    backgroundColor: "teal", 
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
})
