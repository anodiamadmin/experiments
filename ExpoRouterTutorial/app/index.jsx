import { Text, View, StyleSheet, ImageBackground, Pressable } from "react-native";
import icedCoffeeImg from '@/assets/images/iced-coffee.png'
import { Link } from "expo-router";

export default function app() {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.image} source={icedCoffeeImg}>
          <Text style={styles.title}>Coffee Please!</Text>

          <Link href={'/explore'} style={{marginHorizontal: 'auto'}} asChild>
            <Pressable style={styles.button}>  
              <Text style={styles.buttonText}>Explore</Text>
            </Pressable>
          </Link>

          <Link href={'/contact'} style={styles.link}>Contact Us</Link>
          
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: '#ffeec0',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    marginBottom: 120,
  },
  link: {
    color: '#ddaa88',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: 10,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.67)',
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ddaa88',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
})
